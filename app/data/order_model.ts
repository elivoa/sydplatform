export class OrderList {
	data: Order[]

	// pager info
	total: number
	page: number
	items: number
}

export class Order {

	id: number
	tn: number  // real identification
	status: string  // todeliver | delivering | done | canceled | (all)
	type: number  //OrderType  // 代发 | 大货 | 子订单
	customer_id: number  // TODO: change this into int64

	// shipping info
	delivery_method: string  // YTO, SF, Depoon, Freight, TakeAway
	delivery_tn: string // 快递单号
	express_fee: number  // -1 means 到付
	shipping_address: string // this only used in ShippingInstead

	// price summarization.
	total_price: number  // float64 // not include expressfee
	total_count: number
	price_cut: number//float64 // currently not used.
	accumulated: number//float64 // 上期累计欠款快照（不包含本期订单价格以及代发费用）

	note: string
	parent_tn: number // int64 `` // if has value it's a suborder

	// Details []*OrderDetail `inject:"slice"` // cascated

	// times
	create_time: string // time.Time
	update_time: string // time.Time
	close_time: string // time.Time

	// additional containers
	//	Customer *Person

	// Details []*OrderDetail `inject:"slice"` // cascated

	// functions TODO: how to make thiapps work?
	public SumOrderPrice(): number {
		var sum = this.total_price
		if (this.express_fee > 0) {
			sum += this.express_fee
		}
		return sum
	}

	// SumOrderPrice2: (x: number, y: number) => number =
	// function(x: number, y: number): number { return x + y; };

}
