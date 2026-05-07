import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new',
  imports: [FormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class New {
  users = ['shubh', 'pratik', 'satyarth', 'shubham'];
  name = 'shubh';
  userName: string = 'shubh';
  task = 'meeting at 10am';
  tasklist: { id: number; name: string; age: number }[] = [];
  addtask() {
    this.tasklist.push({
      id: this.tasklist.length + 1,
      name: this.task,
      age: this.tasklist.length + 1,
    });
    console.log(this.tasklist);
  }
  deletetask(id: number) {
    this.tasklist = this.tasklist.filter((items) => items.id !== id);
  }
}
