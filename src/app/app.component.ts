import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { UpdateAvailableEvent } from '@angular/service-worker/src/low_level';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio 4';
  // version = '1.0';
  version = '1.1';

  constructor(public swUpdate: SwUpdate) {
    if (swUpdate.isEnabled) {
      swUpdate.available.subscribe(
        (event: UpdateAvailableEvent) => {
          const msg = 'Hay disponible una nueva versión. ¿ Desea actualizar la aplicación?';
          if (confirm(msg)) {
            window.location.reload();
          }
        }
      );
    }

  }

  comprobarVersion() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.checkForUpdate()
        .then(() => {
          alert('La aplicación está actualizada');
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
}
