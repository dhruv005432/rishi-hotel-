import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactData: any = {};

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.contactData = form.value;
      console.log("Form Data:", JSON.stringify(this.contactData));
      debugger;

      // Post to db.json (Swagger UI-compatible)
      this.http.post('http://localhost:3000/contactMessages', this.contactData).subscribe(
        () => alert("Message sent successfully!"),
        error => alert("Error sending message!")
      );
    } else {
      alert("Please fill all required fields.");
    }
  }
}
