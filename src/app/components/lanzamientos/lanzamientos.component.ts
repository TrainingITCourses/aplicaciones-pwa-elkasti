import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { LoadLaunchs } from '../../reducers/launch/launch.actions';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) { }


  ngOnInit() {

    this.store.dispatch(new LoadLaunchs());

  }

}
