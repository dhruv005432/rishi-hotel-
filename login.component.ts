import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      alert('Please fill in all fields.');
      return;
    }

    const loginData = this.loginForm.value;
    console.log('Login Data:', JSON.stringify(loginData));
    debugger;

    this.loginService.loginUser(loginData.email, loginData.password).subscribe(user => {
      if (user.length > 0) {
        alert('Thank you for logging in to Khodal Hotel');
        localStorage.setItem('user', JSON.stringify(user[0]));
        this.router.navigate(['/home']);
      } else {
        alert('Login failed. Invalid email or password.');
      }
    });
  }

  forgotPassword() {
    alert('Reset link sent to your email/phone');
  }
}
