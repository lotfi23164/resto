import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-edit-chef',
  templateUrl: './edit-chef.component.html',
  styleUrls: ['./edit-chef.component.css']
})
export class EditChefComponent implements OnInit {
  id:any;
  chef:any= {};
  chefForm!:FormGroup;
  constructor( private fb:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private chefService:ChefService,
    private router:Router) { }

  ngOnInit() {
    this.chefForm = this.fb.group({
      name: [''],
      experience: [''],
      speciality: ['']
    })
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
  this.chefService.getChefByIdService(this.id).subscribe(
    data => {
      this.chef=data.chef;
    }
  )
  };
  
  
  
  editChef() {
    console.log('This is my chef', this.chef); 
    this.chefService.updateChefService(this.chef).subscribe(
      () => {
        console.log('update successfully');
        this.router.navigate(['admin']);
      }
    )
  }

}
