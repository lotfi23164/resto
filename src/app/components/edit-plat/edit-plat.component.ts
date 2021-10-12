import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ChefService } from 'src/app/services/chef.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-plat',
  templateUrl: './edit-plat.component.html',
  styleUrls: ['./edit-plat.component.css']
})
export class EditPlatComponent implements OnInit {
 id:any;
  plat:any= {};
  platForm!:FormGroup;
  constructor( private fb:FormBuilder,
    private chefService:ChefService,
    private router:Router) { }
    

  ngOnInit() {
    this.platForm = this.fb.group({
      name: [''],
      description: [''],
      price: ['']
    })
  }

  editPlat() {
    console.log('This is my plat', this.plat);
    this.chefService.updateChefService(this.plat).subscribe(
      () => {
        console.log('update successfully');
        this.router.navigate(['admin']);
      }
    ) 
  }

}
