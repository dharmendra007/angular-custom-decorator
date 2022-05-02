import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable()
export class TesteService {
  stream$ = new BehaviorSubject<any>(null);

  constructor() {}
}
