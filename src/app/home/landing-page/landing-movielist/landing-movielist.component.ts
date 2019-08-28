import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { tap, catchError, delay } from 'rxjs/operators';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-landing-movielist',
	templateUrl: './landing-movielist.component.html',
	styleUrls: [ './landing-movielist.component.scss' ]
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

	movieIDMb: any = [
		{
			biDanh: 'ted-2',
			idmb: 'tt2637276'
		},
		{
			biDanh: 'trainwreck',
			idmb: 'tt3152624'
		},
		{
			biDanh: 'inside-out',
			idmb: 'tt2096673'
		},
		{
			biDanh: 'home',
			idmb: 'tt2224026'
		},
		{
			biDanh: 'batman-v-superman-dawn-of-justice',
			idmb: 'tt2975590'
		},
		{
			biDanh: 'ant-man',
			idmb: 'tt5180836'
		},
		{
			biDanh: 'jurassic-world',
			idmb: 'tt0369610'
		},
		{
			biDanh: 'fantastic-four',
			idmb: 'tt1502712'
		},
		{
			biDanh: 'mad-max-fury-road',
			idmb: 'tt1392190'
		},
		{
			biDanh: 'true-detective',
			idmb: 'tt2356777'
		},
		{
			biDanh: 'the-longest-ride',
			idmb: 'tt2726560'
		},
		{
			biDanh: 'the-walking-dead',
			idmb: 'tt1520211'
		},
		{
			biDanh: 'southpaw',
			idmb: 'tt1798684'
		},
		{
			biDanh: 'specter',
			idmb: 'tt2379713'
		}
	];
	constructor(private dataService: QuanLyPhimService, private http: HttpClient) {}

	ngOnInit() {
		this.getMovieList();
		this.createJSON();
		// this.getResponse();
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
	tagName: any = [];

	getResponse() {
		console.log(this.tagName[0]);
	}

	createJSON() {
		this.movieIDMb.map((item) => {
			var tconst = item.idmb,
				style = 'p4',
				user = 'ur106908509';
			var scriptTag = document.createElement('script');
			scriptTag.src =
				'https://p.media-imdb.com/static-content/documents/v1/title/' +
				tconst +
				'/ratings%3Fjsonp=imdb.rating.run:imdb.api.title.ratings/data.json?u=' +
				user +
				'&s=' +
				style;
			scriptTag.id = 'imdb-jsonp-' + tconst;
			this.tagName.push(scriptTag.src);
		});
	}

	getMovieList() {
		const uri = `/QuanLyPhim/LayDanhSachPhim?maNhom=${this.dataService.maNhom.value}`;
		let uriLength: any;
		this.dataService.get(uri).subscribe((data) => {
			this.dataService.openSpinner(true);
			this.movieList = data;
			this.movieList.map((item) => {
				this.movieIDMb.map((itemRate) => {
					uriLength = `QuanLyPhim/LayThongTinPhim?MaPhim=${item.maPhim}`;
					this.dataService.get(uriLength).subscribe((data2) => {
						item.thoiLuong = data2.lichChieu[0].thoiLuong;
					});
					if (itemRate.biDanh === item.biDanh) {
						item.idmb = itemRate.idmb;
					}
				});
			});
			console.log(this.movieList);
		});
		this.dataService.openSpinner(false);
	}
}
