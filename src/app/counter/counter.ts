import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
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

  handlevent(event: Event) {
    console.log('event is working');
    console.log('functtion called', event.type);
    console.log('functtion taget', event.target);

    console.log('value', (event.target as HTMLInputElement).value);
  }
  name = '';
  displayname = '';
  email = '';
  getname(event: Event) {
    const name = (event.target as HTMLInputElement).value;
    this.name = name;
    console.log(event);
  }
  showname(event: Event) {
    this.displayname = this.name;
  }
  setName() {
    this.name = 'Angular';
  }
  getemail(val: string) {
    console.log(val);
    this.email = val;
  }
  setemail() {
    this.email = 'Angular';
  }
}
