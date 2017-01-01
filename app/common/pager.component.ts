import { Component, Input, OnInit, OnChanges } from '@angular/core';
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

	@Input() total: number; // current tab
	@Input() page: number;
	@Input() items: number;

	maxPage: number
	pages: number[] = []

	MAXPAGE: number = 7

	constructor(
		private route: ActivatedRoute,
		private location: Location,
	) { }

	ngOnInit(): void {
		this.maxPage = 1
	}

	ngOnChanges(): void {
		// TODO filterout pager
		this.total = this.total < 0 ? 0 : this.total
		this.page = this.page < 0 ? 0 : this.page
		this.items = this.items <= 0 ? 0 : this.items

		this.maxPage = Math.ceil(this.total / this.items)
		this.pages = []

		let pagecount = 0;
		let notend = false
		for (let i = 0; i < this.maxPage; i++) {
			if (pagecount >= this.MAXPAGE) {
				notend = true
				break
			}
			this.pages.push(i)
			pagecount++;
		}
		if (notend == true) {
			this.pages.push(-2)// -1 left ..., -2 right ...
		}
		console.log("DEBUG: pager:maxpages", this.maxPage)
	}

	pageClass(pn: number): string {
		return pn == this.page ? "cur" : ""
	}

}