import {Injectable} from '@angular/core'

@Injectable()
export class ConstService {
  private base_url = "http://localhost:8880/api/"

  // AJAX URLs

  public api(api: string): string {
    return [this.base_url, api].join("");
  }

  // Order

  orderStatusLabel: {}
    = {
    "toprint": "待打印",
    "todeliver": "待发货",
  }

  public getOrderStatusLabel(key: string): string {
    let a = this.orderStatusLabel[key];
    return a ? a : key;
  }

}
