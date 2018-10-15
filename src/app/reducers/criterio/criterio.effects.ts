import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ApiService } from '../../services/api.service';
import { CriterioActionTypes, CambiarCriterio, CambiadoCriterio, NoCambiadoCriterio } from './criterio.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class CriterioEffects {


  @Effect()
  public cambiarCriterio$ = this.actions$
    .ofType(CriterioActionTypes.CambiarCriterio)
    .pipe(
      mergeMap((action: CambiarCriterio) =>
        this.api
          .getData$(action.payload.campo)
          .pipe(
            map(lista => new CambiadoCriterio(lista)),
            catchError(err => of(new NoCambiadoCriterio(err.message)))
          )

      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) { }
}
