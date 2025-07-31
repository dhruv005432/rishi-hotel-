import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  dob: string = '';
  age: number = 0;
  states = ['Gujarat', 'Maharashtra', 'Rajasthan', 'Punjab', 'Delhi'];

  constructor(private http: HttpClient) {}

  calculateAge() {
    if (this.dob) {
      const birthDate = new Date(this.dob);
      const today = new Date();
      this.age = today.getFullYear() - birthDate.getFullYear();
    }
  }

  onSubmit(form: NgForm) {
    const formData = form.value;
    console.log("Form Submitted:", JSON.stringify(formData));
    debugger;

    // Check for duplicate registration
    this.http.get<any[]>(`http://localhost:3000/users`).subscribe(users => {
      const exists = users.find(user =>
        user.email === formData.email || user.mobile === formData.mobile
      );

      if (exists) {
        alert("⚠️ You have already registered!");
      } else {
        this.http.post('http://localhost:3000/users', formData).subscribe(() => {
          alert("✅ Registration successful!");
          form.reset();
        });
      }
    });
  }
}
