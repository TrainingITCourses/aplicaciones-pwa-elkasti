import { Action } from '@ngrx/store';
import { CriterioBusqueda } from '../../shared/lanzamientos';

export enum LaunchActionTypes {
  LoadLaunchs = '[Launch] Load Launchs',
  Loaded = '[Launch] Loaded Launchs',
  NotLoaded = '[Launch] Not Loaded',
  Filter = '[Launch] Filtrar',
  Filtered = '[Launch] Filtrado',
  NotFiltered = '[Launch] Not Filtered',
}

export class LoadLaunchs implements Action {
  readonly type = LaunchActionTypes.LoadLaunchs;
}

export class Loaded implements Action {
  readonly type = LaunchActionTypes.Loaded;
  constructor(readonly payload: any[]) { }
}

export class NotLoaded implements Action {
  readonly type = LaunchActionTypes.NotLoaded;
  constructor(readonly payload: string) { }
}

export class Filter implements Action {
  readonly type = LaunchActionTypes.Filter;
  constructor(readonly payload: CriterioBusqueda) { }
}

export class Filtered implements Action {
  readonly type = LaunchActionTypes.Filtered;
  constructor(readonly payload: any[]) { }
}

export class NotFiltered implements Action {
  readonly type = LaunchActionTypes.NotFiltered;
  constructor(readonly payload: string) { }
}

export type LaunchActions =
  LoadLaunchs | Loaded | NotLoaded | Filter | Filtered | NotFiltered;
