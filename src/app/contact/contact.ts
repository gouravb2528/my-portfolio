import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  
})
export class Contact {
   name = '';

  email = '';

  message = '';

  sendEmail(){

    console.log(this.name);

    console.log(this.email);

    console.log(this.message);
}
}

