import { Action } from '@ngrx/store';
import { CriterioActionTypes, CriterioActions } from './criterio.actions';

export interface State {
  lista?: any[];
  mensaje?: string;
}

export const initialState: State = {
  lista: [],
  mensaje: ''
};

export function reducer(state = initialState, action: CriterioActions): State {
  switch (action.type) {
    case CriterioActionTypes.CambiarCriterio:
      return state;
    case CriterioActionTypes.CambiadoCriterio:
      return { lista: action.payload };
    case CriterioActionTypes.NoCambiadoCriterio:
      return { mensaje: action.payload };
    default:
      return state;
  }
}
