import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { LaunchActionTypes, Loaded, Filter, Filtered, NotLoaded, NotFiltered } from './launch.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { enCampo } from 'src/app/shared/lanzamientos';
import { of } from 'rxjs';

@Injectable()
export class LaunchEffects {

  @Effect()
  public load$ = this.actions$
    .ofType(LaunchActionTypes.LoadLaunchs)
    .pipe(
      mergeMap(() =>
        this.api
          .getLaunches$()
          .pipe(
            map(launches => new Loaded(launches.map(launch => ({ name: launch.name })))),
            catchError(err => of(new NotLoaded(err.message)))
          )
      )
    );

  @Effect()
  public filtrar$ = this.actions$
    .ofType(LaunchActionTypes.Filter)
    .pipe(
      mergeMap((action: Filter) =>
        this.api
          .getLaunches$()
          .pipe(
            map(launches => {
              let launchesFiltered = [];
              if (!action.payload.campo || !action.payload.valor) {
                launchesFiltered = launches;
              } else {
                switch (action.payload.campo) {
                  case enCampo.mision:
                    launchesFiltered = launches.filter(launch =>
                      launch.missions && launch.missions.some(elem => elem.id === action.payload.valor));
                    break;
                  case enCampo.agencia:
                    launchesFiltered = launches.filter(launch =>
                      launch.rocket && launch.rocket.agencies && launch.rocket.agencies.some(elem => elem.id === action.payload.valor));
                    break;
                  case enCampo.estado:
                    launchesFiltered = launches.filter(launch => launch.status === action.payload.valor);
                    break;
                }
              }
              return new Filtered(launchesFiltered.map(launch => ({ name: launch.name })));
            }
            ),
            catchError(err => of(new NotFiltered(err.message)))
          )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }
}
