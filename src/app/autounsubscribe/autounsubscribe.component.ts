import { Component, OnDestroy, OnInit,VERSION } from '@angular/core';
import { AutoUnsubscribe } from '../decorator/decorator';
import { Observable } from 'rxjs';
import { TesteService } from '../teste.service';

@Component({
  selector: 'app-autounsubscribe',
  templateUrl: './autounsubscribe.component.html',
  styleUrls: ['./autounsubscribe.component.css'],
})
export class AutounsubscribeComponent implements OnInit, OnDestroy {
  private uid = `${Date.now()}-${Math.random() * 1e16}`;

  @AutoUnsubscribe()
  stream$!: Observable<string>;
  name = 'Angular ' + VERSION.major + ' Auto-unsubscribe';

  show = true;


  constructor(public testeService: TesteService) {}

  newValue() {
    this.testeService.stream$.next(`${Date.now()}`);
  }

  ngOnInit() {
    this.stream$ = this.testeService.stream$;
    this.stream$.subscribe((stream) => {
      console.log(`STREAM EMITTED ${this.uid}`);
    });
  }

  ngOnDestroy() {
    console.log(`DESTROYED ${this.uid}`);
  }
}
