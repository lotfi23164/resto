import { UserService } from './../../services/user.service';
import { ChefService } from './../../services/chef.service';
import { PlatService } from './../../services/plat.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  chefs:any;
  plats:any;
  users:any;
  constructor(
    private router:Router,
    private platService:PlatService,
    private chefService:ChefService,
    private userService:UserService) { }

  ngOnInit() {
    this.platService.getAllPlatsService().subscribe(
      (data) => {
        this.plats = data.plats;
      }
    );

    this.chefService.getAllChefsService().subscribe(
      (data) => {
        this.chefs = data.chefs;
      }
    );

    this.userService.getAllUsersService().subscribe(
      data => {
        this.users = data.users;
      }
    )

  }

  // Function declaration
  goToDisplay(x:any) {
    this.router.navigate([`display-chef/${x}`])
  }

  goToEdit(x:any) {
    this.router.navigate([`edit-chef/${x}`])
  }

  goToDisplayPlat(x:any) {
    this.router.navigate([`display-plat/${x}`])
  }

  goToEditPlat(x:any) {
    this.router.navigate([`edit-plat/${x}`])
  }

  deleteChef(id:string){
    this.chefService.deleteChefService(id).subscribe(
      ()=> {
        this.chefService.getAllChefsService().subscribe(
          (data) => {
            this.chefs = data.chefs;
          }
        );
      }
    )
  }

}
