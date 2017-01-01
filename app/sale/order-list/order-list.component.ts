import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserToken } from '../../data/user_model'
import { Order, OrderList } from '../../data/order_model'

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

	@Input() page: number;
	@Input() items: number;

	userToken: UserToken;

	errorMessage: string;
	orderlist: OrderList;
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
		this.orderService.getOrderList(this.tab, {
			"page": this.page,
			"items": this.items,
		}).subscribe(
			orders => { this.orderlist = orders },
			error => this.errorMessage = <any>error);
	}


	getOrderSumOrderPrice(order: Order): number {
		return this.orderService.getSumOrderPrice(order)
	}

	generateOrderPriceHtml(order: Order): number {
		var orderprice: number
		if (order.status == 'todeliver') {
			orderprice = order.total_price;
		} else {
			orderprice = this.getOrderSumOrderPrice(order);
		}
		if (orderprice == undefined) {
			orderprice = 0
		}
		return orderprice
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


