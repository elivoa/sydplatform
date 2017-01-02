import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserToken } from '../../data/user_model'
import { Pair } from '../../data/data_model'

import { AuthService } from '../../service/auth.service'

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: "product-list-page",
	templateUrl: './product-list-page.component.html',
})

// TODO Add RequireLogin Annotation
export class ProductListPage implements OnInit {

	@Input() id: number;
	@Input() page: number;
	@Input() items: number;

	tab: string; // current tab

	debug = false;

	// page values
	tabs: Pair[] = []


	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private authService: AuthService,
	) { }

	ngOnInit(): void {
		// Require Admin
		this.authService.requireRole(["admin"]);

		// fix tabs
		this.tabs.push(new Pair("all", "全部"))
		for (var i = 65; i <= 90; i++) {
			this.tabs.push(new Pair(String.fromCharCode(i), String.fromCharCode(i)))
		}
		this.tabs.push(new Pair("#", "#"))

		// TODO: 这里好奇怪,这个语法要改。这里不效率。
		this.route.params
			.switchMap((params : Params) => this.tab = params['tab'])
			.subscribe();

		this.route.queryParams
			.switchMap((params: Params) => {
				this.page = params['page'];
				this.items = params['items'];
				return this.tab;
			})
			.subscribe();

	}

	getOrderList(): any {


		return null;
	}

	goBack(): void {
		this.location.back()
	}

}