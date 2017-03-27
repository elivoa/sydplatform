import {Component, Input, OnInit, OnChanges} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {UserToken} from '../../data/user_model'
import {Person, PersonList} from '../../data/person_model'

import {AuthService} from '../../service/auth.service'
import {PersonService} from '../../service/person.service'

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: module.id,
  selector: "customer-list",
  templateUrl: './customer-list.component.html',
})

// TODO Add RequireLogin Annotation
export class CustomerListComponent implements OnInit {

  @Input() id: number;
  @Input() tab: string; // current tab
  @Input() showPager: boolean;

  @Input() page: number;
  @Input() items: number;

  userToken: UserToken;

  errorMessage: string;
  customers: PersonList;
  mode = 'Observable';

  constructor(private route: ActivatedRoute,
              private location: Location,
              private authService: AuthService,
              private personService: PersonService,) {
  }

  ngOnChanges(): void {
    this.getCustomerList();
  }

  ngOnInit(): void {
  }

  getCustomerList() {
    this.personService.getCustomerList("customer", {
      "tab": this.tab,
      "page": this.page,
      "items": this.items,
      "orderby": "id",// default order by CreateTime desc.
      "order": "desc",
    }).subscribe(
      persons => {
        this.customers= persons
      },
      error => this.errorMessage = <any>error);
  }



}


