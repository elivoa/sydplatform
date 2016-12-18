import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserToken } from '../../data/user_model'

import { AuthService } from '../../service/auth.service'

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: "order-list",
	templateUrl: './order-list.component.html',
})

// TODO Add RequireLogin Annotation
export class OrderListComponent implements OnInit {

	@Input() id: number;

	tab: string; // current tab

	userToken: UserToken;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private authService: AuthService,
	) { }

	ngOnInit(): void {

		this.route.params
			.switchMap((params: Params) => this.tab = params['tab'])
			// .subscribe(() => console.log(this.tab));

		console.log(">> tab is ", this.tab);
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