import { Action } from '@ngrx/store';
import { LaunchActionTypes, LaunchActions } from './launch.actions';


export interface State {
    launches: any[];
    cargado: boolean;
    mensaje: string;
}

export const initialState: State = {
    launches: [],
    cargado: false,
    mensaje: ''
};

export function reducer(state = initialState, action: LaunchActions): State {
    switch (action.type) {
        case LaunchActionTypes.LoadLaunchs:
            return state;
        case LaunchActionTypes.Loaded:
            return { launches: action.payload, cargado: true, mensaje: '' };
        case LaunchActionTypes.NotLoaded:
            return { launches: [], cargado: false, mensaje: action.payload };
        case LaunchActionTypes.Filter:
            return state;
        case LaunchActionTypes.Filtered:
            return { launches: action.payload, cargado: true, mensaje: '' };
        case LaunchActionTypes.NotFiltered:
            return { launches: [], cargado: false, mensaje: action.payload };
        default:
            return state;
    }
}
