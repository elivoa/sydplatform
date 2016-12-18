import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserToken } from '../../data/user_model'

import { AuthService } from '../../service/auth.service'

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: "order-query-page",
	templateUrl: './order-query-page.component.html',
})

// TODO Add RequireLogin Annotation
export class OrderQueryPage implements OnInit {

	@Input() id: number;

	userToken: UserToken;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private authService: AuthService,
	) { }

	ngOnInit(): void {
		console.log('log: go into UserInfoPage.');

		// this.route.params
		// 	.switchMap((params: Params) => this.id = params['id'])
		// 	.subscribe(() => console.log('ss'));

		// this.getUserToken()
	}

	getUserToken(): void {
		this.userToken = this.authService.getUserToken()
		// 	this.authService.getUserToken().then(ut => {
		// 		this.userToken = ut
		// 		console.log("Service: UserToken is : ", this.userToken)
		// 	})
	}

	// goBack(): void {
	// 	this.location.back()
	// }

}