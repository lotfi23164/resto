import { ChefService } from './../../services/chef.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {

  chef:any= {};
  chefForm!:FormGroup;
  constructor( 
    private fb:FormBuilder,
    private chefService:ChefService
    ) { }

  ngOnInit() {
    this.chefForm = this.fb.group({
      name: [''],
      experience: [''],
      speciality: ['']
    })
  }

  addChef() {
    console.log('This is my chef', this.chef); 
    this.chefService.addChefService(this.chef).subscribe(
      () => {
        console.log('Chef added successfully');
      }
    )
  }

}
