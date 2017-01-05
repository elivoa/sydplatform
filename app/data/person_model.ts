export class PersonList {
  data: Person[]

  // pager info
  total: number
  page: number
  items: number
}

export class Person {

  id: number
  name: string
  type: string // `enum(客户Customer|厂家Factory)`
  phone: string // `json:"phone,omitempty"`
  city: string //`json:"city,omitempty"`
  address: string // `json:"address,omitempty"`
  postalCode: number //`json:"postal_code,omitempty"`
  qq: number // `json:"qq,omitempty"`
  website: string //`json:"website,omitempty"`
  note: string //`json:"note,omitempty"`

  // Customer: 存储累计欠款; Factory: TODO
  account_ballance: number// `json:"account_ballance,omitempty"`

  create_time: string // time.Time
  update_time: string // time.Time

  // TODO ++
  /* favorite delivery method: TakeAway|SFExpress|物流 */
  //  DeliveryMethod string `json:"delivery_method,omitempty"`


}
