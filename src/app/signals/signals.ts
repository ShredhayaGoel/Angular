import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  count = signal(10);
  x = 20;
  updatevalue(val: string) {
    // this.count.set(100);
    if (val == 'inc') {
      this.count.set(this.count() + 1);
    } else {
      val == 'dec';
      this.count.set(this.count() - 1);
    }
  }
  constructor() {
    effect(() => {
      console.log(this.count());
    });
  }
}
