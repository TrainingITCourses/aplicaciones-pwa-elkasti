import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public launches = this.store.select(s => s.launch.launches);
  public cargado = this.store.select(s => s.launch.cargado);

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit() {

  }

}
