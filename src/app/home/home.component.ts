import { QuanLyPhimService } from './../shared/services/quan-ly-phim.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	constructor(public dataService: QuanLyPhimService) { }
	showSpinner: boolean = true;

	private subSpinner = new Subscription();

	ngOnInit() {
		this.getSpinner();
	}
	getSpinner() {
		setTimeout(() => {
			this.subSpinner = this.dataService.spinned.subscribe((data) => {
				this.showSpinner = data;
			});
		}, 3000);
	}

	ngOnDestroy() {
		this.subSpinner.unsubscribe();
	}
}
