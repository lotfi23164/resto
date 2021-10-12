import { PlatService } from './../../services/plat.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  plat:any= {};
  platForm!:FormGroup;
  constructor( 
    private fb:FormBuilder,
    private platService:PlatService) { }

  ngOnInit() {
    this.platForm = this.fb.group({
      name: [''],
      description: [''],
      price: ['']
    })
  }

  addPlat() {
    console.log('This is my plat', this.plat); 
    this.platService.addPlatService(this.plat).subscribe(
      ()=> {
        console.log('Plat added successfully');
      }
    )
  }

}
