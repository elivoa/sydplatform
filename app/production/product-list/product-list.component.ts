import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {UserToken} from '../../data/user_model'
import {Product, ProductList} from '../../data/product_model'

import {AuthService} from '../../service/auth.service'
import {ProductService} from '../../service/product.service'

import 'rxjs/add/operator/switchMap';

//noinspection TypeScriptValidateTypes
@Component({
  moduleId: module.id,
  selector: "product-list",
  templateUrl: './product-list.component.html',
})

// TODO Add RequireLogin Annotation
export class ProductListComponent implements OnInit {

  @Input() id: number;
  @Input() tab: string; // current tab
  @Input() showPager: boolean;

  @Input() page: number;
  @Input() items: number;

  userToken: UserToken;

  errorMessage: string;
  productlist: ProductList;
  mode = 'Observable';

  constructor(private route: ActivatedRoute,
              private location: Location,
              private authService: AuthService,
              private productService: ProductService,) {
  }

  ngOnChanges(): void {
    // console.log("On Change")
    this.getProductList();
  }

  ngOnInit(): void {
  }

  getProductList() {
    this.productService.getProductList(this.tab, {
      "page": this.page,
      "items": this.items,
      "orderby": "createtime",// default order by CreateTime desc.
      "order": "desc",
    }).subscribe(
      products => {
        this.productlist = products
      },
      error => this.errorMessage = <any>error);
  }

  onHide() {
    console.log("hide", this.id)
  }

  onShow() {
    console.log("show", this.id)
  }


  // getOrderSumOrderPrice(order: Order): number {
  // 	return this.orderService.getSumOrderPrice(order)
  // }

  // generateOrderPriceHtml(order: Order): number {
  // 	var orderprice: number
  // 	if (order.status == 'todeliver') {
  // 		orderprice = order.total_price;
  // 	} else {
  // 		orderprice = this.getOrderSumOrderPrice(order);
  // 	}
  // 	if (orderprice == undefined) {
  // 		orderprice = 0
  // 	}
  // 	return orderprice
  // }

  // generateOrderPriceExtHtml(order: Order): string {
  // 	if (order.status == 'todeliver') {
  // 		return "（不含运费）";
  // 	} else {
  // 		if (order.delivery_method == "TakeAway") {
  // 			return "（自提）"
  // 		} else {
  // 			if (order.express_fee == -1) {// daofu
  // 				return "到付"
  // 			} else if (order.express_fee >= 0) {
  // 				return "（含运费" + order.express_fee + "元）";
  // 			}
  // 		}
  // 	}
  // }

  // getOrderSumOrderPrice(): (order: Order) => {
  // 	return order.SumOrderPrice();
  // }

}


