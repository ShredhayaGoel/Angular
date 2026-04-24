import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = 0;
  handleincrement() {
    this.count = this.count + 1;
  }
  handleDeccrement() {
    if (this.count > 0) {
      this.count = this.count - 1;
    }
  }
  handleReset() {
    this.count = 0;
  }
}
