import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: "homepage",
  templateUrl: 'homepage.component.html',
})

export class HomePage implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  user: string = "Elivoa";
  
  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back()
  }

}