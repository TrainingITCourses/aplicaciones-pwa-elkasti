import { Component, OnInit } from '@angular/core';
import { CriterioBusqueda } from '../../shared/lanzamientos';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { CambiarCriterio } from '../../reducers/criterio/criterio.actions';
import { Filter, LoadLaunchs } from '../../reducers/launch/launch.actions';

@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html',
    styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

    public lista = this.store.select(s => s.criterio.lista);

    criterio: CriterioBusqueda = new CriterioBusqueda();

    constructor(
        private store: Store<State>,
    ) { }

    ngOnInit() {
    }

    campo(event: any) {

        this.criterio.campo = Number(event.target.value);
        this.criterio.valor = '';
        this.store.dispatch(new CambiarCriterio(this.criterio));
        this.store.dispatch(new Filter(this.criterio));

    }

    buscar(event: any) {

        this.criterio.valor = Number(event.target.value);
        this.store.dispatch(new Filter(this.criterio));

    }


}
