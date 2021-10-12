import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:any= {};
  x:number=5;
  loginForm!:FormGroup;
  constructor( private fb:FormBuilder,
    private userService:UserService,
   private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [''],
      pwd: ['']
    })
  }

  login() {
    this.userService.login(this.user).subscribe(
      (data) => {
        if (data.message ==='2'){
          localStorage.setItem('connectedUser', JSON.stringify(data.user))
          if (data.user.role ==='admin'){
            this.router.navigate(['admin']);
          }else {
          this.router.navigate(['/']);}
        }
      }
    )
    
  }

}
