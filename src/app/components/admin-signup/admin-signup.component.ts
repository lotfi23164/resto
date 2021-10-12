import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  
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
    x.role='admin';
     this.userService.signup(x).subscribe(
       () =>{
         console.log('User added successfully');
       }
     )
  }

}
