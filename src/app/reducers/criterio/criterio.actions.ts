import { Action } from '@ngrx/store';
import { CriterioBusqueda } from '../../shared/lanzamientos';

export enum CriterioActionTypes {
  CambiarCriterio = '[Criterio] Cambiar criterio',
  CambiadoCriterio = '[Criterio] Cambiado criterio',
  NoCambiadoCriterio = '[Criterio] No cambiado criterio'
}

export class CambiarCriterio implements Action {
  readonly type = CriterioActionTypes.CambiarCriterio;
  constructor(readonly payload: CriterioBusqueda) { }
}

export class CambiadoCriterio implements Action {
  readonly type = CriterioActionTypes.CambiadoCriterio;
  constructor(readonly payload: any[]) { }
}

export class NoCambiadoCriterio implements Action {
  readonly type = CriterioActionTypes.NoCambiadoCriterio;
  constructor(readonly payload: string) { }
}

export type CriterioActions = CambiarCriterio | CambiadoCriterio | NoCambiadoCriterio;
