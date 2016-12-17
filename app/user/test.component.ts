import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserToken } from '../data/user_model'

import { AuthService } from '../service/auth.service'

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: "test",
  templateUrl: 'test.component.html',
})

export class TestPage implements OnInit {
  @Input() id: number;

  userToken: UserToken;
  user: string = "Elivoa";
  a: string = "a";

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    console.log('log: go into UserInfoPage.')
    this.userToken = new UserToken(23, "elioa")
    this.getUserToken()
  }

  getUserToken(): void {
    this.authService.getUserToken().then(ut => {
      this.userToken = ut
      console.log("ut is : ", this.userToken)
    })
  }

}