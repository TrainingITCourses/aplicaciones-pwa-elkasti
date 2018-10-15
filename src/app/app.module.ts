import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LanzamientosComponent } from './components/lanzamientos/lanzamientos.component';
import { ListaComponent } from './components/lista/lista.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducers';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LaunchEffects } from './reducers/launch/launch.effects';
import { CriterioEffects } from './reducers/criterio/criterio.effects';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    LanzamientosComponent,
    ListaComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production
      ? StoreDevtoolsModule.instrument()
      : [],
    EffectsModule.forRoot([LaunchEffects, CriterioEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    // StoreModule.forFeature('state', fromState.reducers, { metaReducers: fromState.metaReducers })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
