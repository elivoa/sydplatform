import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
	selector: "pager",
	templateUrl: './pager.component.html',
})

// TODO Add RequireLogin Annotation
export class PagerComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private location: Location,
	) { }

	ngOnInit(): void {

	}


}