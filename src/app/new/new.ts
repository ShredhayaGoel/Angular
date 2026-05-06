import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new',
  imports: [FormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class New {
  users = ['shubh', 'pratik', 'satyarth', 'satyarth'];
  name = 'shubh';
  userName: string = 'shubh';
}
