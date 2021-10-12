import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChefService } from 'src/app/services/chef.service';

@Component({
  selector: 'app-display-chef',
  templateUrl: './display-chef.component.html',
  styleUrls: ['./display-chef.component.css']
})
export class DisplayChefComponent implements OnInit {

  id: any;
  chef: any;
  constructor(private activatedRoute: ActivatedRoute,
    private chefService: ChefService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.chefService.getChefByIdService(this.id).subscribe(
      data => {
        this.chef = data.chef;
      }
    )
  }

}
