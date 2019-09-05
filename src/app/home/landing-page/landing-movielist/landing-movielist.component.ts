import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from 'src/app/shared/services/quan-ly-phim.service';
import { throwError, Subscription } from 'rxjs';

@Component({
	selector: 'app-landing-movielist',
	templateUrl: './landing-movielist.component.html',
	styleUrls: ['./landing-movielist.component.scss']
})
export class LandingMovielistComponent implements OnInit {
	slideMovieConfig = {
		slidesPerRow: 4,
		rows: 2,
		infinite: true,
		nextArrow: "<button class='slick-next slick-arrow'></button>",
		prevArrow: "<button class='slick-prev slick-arrow'></span></button>",
		arrows: true
	};

	movieList: any = [];
	IDMbUrl: any = [];
	groupCode: string;
	private subListMovie = new Subscription();
	constructor(private dataService: QuanLyPhimService, private http: HttpClient) { }

	ngOnInit() {
		this.getMovieList();
	}
	handleError(err) {
		switch (err.status) {
			case 500:
				alert(err.error);
				break;
			default:
				break;
		}

		return throwError(err);
	}
	getMovieList() {
		this.dataService.setIDMb();
		this.dataService.maNhom.subscribe((code) => {
			this.groupCode = code;
		});
		const uri = `/QuanLyPhim/LayDanhSachPhim?maNhom=${this.groupCode}`;
		let uriLength: any;
		this.subListMovie = this.dataService.get(uri).subscribe((data) => {
			this.dataService.openSpinner(true);
			this.movieList = data;
			this.movieList.map((item) => {
				uriLength = `/QuanLyPhim/LayThongTinPhim?MaPhim=${item.maPhim}`;
				this.dataService.get(uriLength).subscribe((data2) => {
					item.thoiLuong = data2.lichChieu[0].thoiLuong;
				});
				this.dataService.IDMbObserver.subscribe(IDMbItem => {
					IDMbItem.map((itemRate) => {
						if (itemRate.bidanh === item.bidanh) {
							item.idmb = itemRate.idmb;
						}
					})
				});
			});

			console.log(this.movieList);
		});
		this.dataService.openSpinner(false);
	}

	ngOnDestroy() {
		this.subListMovie.unsubscribe();
	}
}
