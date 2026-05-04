import { Component, computed, effect, signal, WritableSignal } from '@angular/core';

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
  count2: WritableSignal<number> = signal(20);
  updatevalue2() {
    this.count2.set(5040);
    //  this.count2.set('hello');
    this.count2.update((val) => val + 1);
  }
  x1 = signal(20);
  y1 = signal(30);
  z = computed(() => this.x1() + this.y1());
  changevalue() {
    console.log(this.z());

    this.x1.set(40);
    console.log(this.z());
  }
}
