import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'frontend';
  nome = 'Nome que está detro do componetne "APP.COMPONETN.TS"';
  envelope = "{{ }}";
}
