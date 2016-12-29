import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserToken } from '../../data/user_model'
import { Pair } from '../../data/data_model'

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

	debug = false;

	// page values
	tabs: Pair[] = [
		new Pair("toprint", "代打印订单"),
		new Pair("todeliver", "代发货订单"),
		new Pair("delivering", "已发货订单"),
		new Pair("done", "已完成订单"),
		new Pair("canceled", "已取消订单"),
		new Pair("all", "全部订单"),
	]

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private authService: AuthService,
	) { }

	ngOnInit(): void {
		// Require Admin
		this.authService.requireRole(["admin"]);

		// TODO: 这里好奇怪,这个语法要改。这里不效率。
		this.route.params
			.switchMap((params: Params) => this.tab = params['tab'])
			.subscribe(() => this.tab = this.tab);
	}

	getOrderList(): any {


		return null;
	}

	goBack(): void {
		this.location.back()
	}

}