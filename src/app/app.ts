import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Profile } from './profile/profile';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  imports: [Login, Profile, Counter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Angular');
  name = 'Shredhaya Goel';
  age = 21;
  getname(a: number, b: number): number {
    let name1 = 'Shredhaya Goel';
    // return this.name;
    //  return a+b;
    // // use this for class property instead of local variable
    return a + b;

    // return name1;
  }
}
