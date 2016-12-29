import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserToken } from '../../data/user_model'
import { Order } from '../../data/order_model'

import { AuthService } from '../../service/auth.service'
import { OrderService } from '../../service/order.service'


import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: "order-list",
	templateUrl: './order-list.component.html',
})

// TODO Add RequireLogin Annotation
export class OrderListComponent implements OnInit {

	@Input() id: number;
	@Input() tab: string; // current tab
	@Input() showPager: boolean;

	userToken: UserToken;

	errorMessage: string;
	orderlist: Order[];
	mode = 'Observable';

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private authService: AuthService,
		private orderService: OrderService,
	) { }

	ngOnChanges(): void {
		// console.log("On Change")
		this.getOrderList();
	}

	ngOnInit(): void { }

	getOrderList() {
		this.orderService.getOrderList(this.tab)
			.subscribe(
			orders => { this.orderlist = orders},
			error => this.errorMessage = <any>error);
	}


	getOrderSumOrderPrice(order: Order): number {
		return this.orderService.getSumOrderPrice(order)
	}

	generateOrderPriceHtml(order: Order): number {
		if (order.status == 'todeliver') {
			return order.total_price;
		} else {
			return this.getOrderSumOrderPrice(order);
		}
	}

	generateOrderPriceExtHtml(order: Order): string {
		if (order.status == 'todeliver') {
			return "（不含运费）";
		} else {
			if (order.delivery_method == "TakeAway") {
				return "（自提）"
			} else {
				if (order.express_fee == -1) {// daofu
					return "到付"
				} else if (order.express_fee >= 0) {
					return "（含运费" + order.express_fee + "元）";
				}
			}
		}
	}

	// getOrderSumOrderPrice(): (order: Order) => {
	// 	return order.SumOrderPrice();
	// }

}


