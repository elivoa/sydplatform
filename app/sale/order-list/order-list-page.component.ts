import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserToken } from '../../data/user_model'

import { AuthService } from '../../service/auth.service'

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: "order-list-page",
	templateUrl: './order-list-page.component.html',
})

// TODO Add RequireLogin Annotation
export class OrderListPage implements OnInit {

	@Input() id: number;

	tab: string; // current tab

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

		// Require Admin
		this.authService.requireRole(["admin"]);
	}

	getOrderList(): any {


		return null;
	}

	goBack(): void {
		this.location.back()
	}

}