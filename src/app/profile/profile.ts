import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name = '';
  email = '';
  age = 0;
  password = '';

  submitprofile() {
    const data = {
      name: this.name,
      age: this.age,
      email: this.email,
      password: this.password,
    };
    console.log(data);
  }
}
