import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!:FormGroup;
  constructor(
    private fb:FormBuilder,
    private userService:UserService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['',[Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.minLength(8), Validators.required]],
      confirmPwd: ['']
    })
  }
  signup(x:any) {
   
     this.userService.signup(x).subscribe(
       () =>{
         console.log('User added successfully');
       }
     )
  }

}
