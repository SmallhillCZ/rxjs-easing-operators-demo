import { Component, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ease } from "@smallhillcz/rxjs-easing-operators";

@Component({
  selector: 'app-root',
  templateUrl: "./app.component.html",
  styles: []
})
export class AppComponent {

  value: Subject<number> = new Subject();

  ms: number = 1000;
  easing: string = "linear";

  animatedValue: Observable<number>;

  constructor() {
    this.setEasing();
  }

  setEasing() {
    this.animatedValue = this.value.pipe(ease({ ms: 10, relativeMs: true, easing: this.easing }), map(value => Math.round(value)));
  }

  setValue(value: string) {
    this.value.next(Number(value));
  }
}
