import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private snackBar: MatSnackBar) {}

  onSubmit(form: any): void {
    if (!form.valid) {
      this.snackBar.open('Please fill out the form correctly.', 'Close', {
        duration: 3000, // Display for 3 seconds
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
      return;
    }

    const formData = form.value;

    // EmailJS configuration
    const serviceID = 'service_zc2jrhe';
    const templateID = 'template_qig3mbd';
    const userID = 'i3eYNAfY8aPGWCV7s';

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          this.snackBar.open('Thank you for your message. I will get back to you soon!', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['success-snackbar'],
          });
          form.reset();
        },
        (error) => {
          this.snackBar.open('Failed to send your message. Please try again later.', 'Close', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['error-snackbar'],
          });        }
      );
  }
}
