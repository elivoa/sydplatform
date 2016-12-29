import { Injectable } from '@angular/core'

@Injectable()
export class ConstService {

	orderStatusLabel: {} = {
		"toprint": "待打印",
		"todeliver": "待发货",
	}

	public getOrderStatusLabel(key: string): string {
		let a = this.orderStatusLabel[key];
		return a ? a : key;
	}

}