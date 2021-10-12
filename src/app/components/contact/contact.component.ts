import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact:any= {};
  contactForm!:FormGroup;
  constructor( private fb:FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: [''],
      email: [''],
      subject: ['']
    })
  }

  contacter() {
    alert('Button clicked');
    console.log('This is my contact', this.contact);
    
  }

}
