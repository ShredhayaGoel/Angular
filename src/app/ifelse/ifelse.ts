import { Component } from '@angular/core';
import { __addDisposableResource } from 'tslib';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.html',
  styleUrl: './ifelse.css',
})
export class Ifelse {
  display = true;
  x = 1;
  hide() {
    this.display = false;
  }
  show() {
    this.display = true;
  }
  toggle() {
    this.display = !this.display;
    console.log(this.display);
  }
}
