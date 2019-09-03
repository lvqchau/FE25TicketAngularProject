import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-movie-page',
	templateUrl: './movie-page.component.html',
	styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
	ngOnInit() {
		this.getParamsFromURL();
		this.getMovieInfo();
	}
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private dataService: QuanLyPhimService
	) {
	}
	movieId: any;
	movieItem: any = [];
	private subMovieInfo = new Subscription();
	getParamsFromURL() {
		this.movieId = this.activatedRoute.snapshot.paramMap.get('movieId');
	}

	getMovieInfo() {
		const uri = `QuanLyPhim/LayThongTinPhim?MaPhim=${this.movieId}`;
		this.dataService.setIDMb();

		this.subMovieInfo = this.dataService.get(uri).subscribe((data) => {
			this.movieItem = data;
			this.movieItem.thoiLuong = data.lichChieu[0].thoiLuong;
			this.dataService.IDMbObserver.subscribe(idmbRating => {
				idmbRating.map(idmbItem => {
					if (idmbItem.bidanh === this.movieItem.bidanh) {
						this.movieItem.idmb = idmbItem.idmb;
					}
				})

			})
		});
	}
	ngOnDestroy() {
		this.subMovieInfo.unsubscribe();
	}
}
