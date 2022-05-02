import { Component, VERSION } from '@angular/core';
import { TesteService } from './teste.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major + ' Auto-unsubscribe';

  show = true;

  constructor(public testeService: TesteService) {}

  newValue() {
    this.testeService.stream$.next(`${Date.now()}`);
  }
}
