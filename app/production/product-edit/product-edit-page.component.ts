import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { UserToken } from '../../data/user_model'
import { Pair } from '../../data/data_model'
import { Product } from '../../data/product_model'

import { AuthService } from '../../service/auth.service'
import { ProductService } from '../../service/product.service'



@Component({
	moduleId: module.id,
	selector: "product-edit-page",
	templateUrl: './product-edit-page.component.html',
})

// TODO Add RequireLogin Annotation
export class ProductEditPage implements OnInit {

	@Input() id: number;
	// @Input() page: number;
	// @Input() items: number;

	product: Product
	errorMessage: string;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private authService: AuthService,
		private productService: ProductService,
	) { }

	ngOnInit(): void {
		// Require Admin
		this.authService.requireRole(["admin"]);
		// fix tabs
		// this.tabs.push(new Pair("all", "全部"))
		// for (var i = 65; i <= 90; i++) {
		// 	this.tabs.push(new Pair(String.fromCharCode(i), String.fromCharCode(i)))
		// }
		// this.tabs.push(new Pair("#", "#"))

		// TODO: 这里好奇怪,这个语法要改。这里不效率。
		this.route.params
			.switchMap((params : Params) => this.id = params['id'])
			.subscribe();

		// this.route.queryParams
		// 	.switchMap((params: Params) => {
		// 		this.page = params['page'];
		// 		this.items = params['items'];
		// 		return this.tab;
		// 	})
		// 	.subscribe();
		this.getProduct()
	}

	ngOnChanges(): void {
		console.log("On Change")
		// this.getProduct();
	}

	getProduct() {
		this.productService.getProduct(this.id, {})
			.subscribe(
				product => { this.product = product },
				error => this.errorMessage = <any>error
			);
	}

}