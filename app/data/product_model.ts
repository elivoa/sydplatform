export class ProductList {
	data: Product[]

	// pager info
	total: number
	page: number
	items: number
}

export class Product {

	id: number
	name: string
	product_id: string
	status: number  // Product.Status, 0-? 1-? hide or not.
	brand: string
	price: number
	supplier: number // customer id
	factory_price: number
	stock: number
	shelf_no: string
	capital: string  // captical letter to quick access.
	note: string

	pictures: string // picture keys splited by ';' filenamne can't contain ';'

	// additional information, not in persistence
	colors: string[]
	Sizes: string[]
	// Properties map[string][]string `json:",omitempty"` // other properties // TODO

	// stock information. format: map[color__size]nstock
	// special values in stock table
	//   stock = -1 means this pair of combination doesn't exist.
	//   stock = -2 means the pair is deleted.(may be price is available)
	// Stocks Stocks `json:",omitempty"` // map[string]int

	// times
	create_time: string // time.Time
	update_time: string // time.Time

}
