import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'syd-header',
	templateUrl: './header.component.html',

})

export class HeaderComponent implements OnInit {
	public constructor(private titleService: Title) { }

	// TODO move to config file.
	@Input() title: string = "SYD PLATFORM::SALES";

	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}

	ngOnInit(): void {
		this.setTitle(this.title);
	}

}
