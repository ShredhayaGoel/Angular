import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  name = '';
  email = '';
  password = '';

  submitForm() {
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    console.log(userData);
  }
}
