import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-cinema-form',
	templateUrl: './cinema-form.component.html',
	styleUrls: [ './cinema-form.component.scss' ]
})
export class CinemaFormComponent implements OnInit {
	constructor(private dataService: QuanLyPhimService) {}

	cineArr = [];
	private subSchedule = new Subscription();
	ngOnInit() {
		this.getCineInfo();
	}

	getCineInfo() {
		const uri = '/QuanLyRap/LayThongTinHeThongRap';
		this.subSchedule = this.dataService.get(uri).subscribe((data) => {
			this.cineArr = data;
			console.log(this.cineArr);
		});
	}

	ngOnDestroy() {
		this.subSchedule.unsubscribe();
	}
}
