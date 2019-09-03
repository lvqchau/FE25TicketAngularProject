import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, catchError, delay } from 'rxjs/operators';

let urlApi = '';
const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};
@Injectable({
	providedIn: 'root'
})
export class QuanLyPhimService {

	private showSpinner = new BehaviorSubject<boolean>(false);
	public spinned = this.showSpinner.asObservable();
	private groupCode = new BehaviorSubject<string>('GP06');
	public maNhom = this.groupCode.asObservable();
	private modalOpener = new BehaviorSubject<any>('');
	public modalObserver = this.modalOpener.asObservable();

	private IDMbRating = [
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
	private IDMbArr = new BehaviorSubject<Array<any>>([]);
	public IDMbObserver = this.IDMbArr.asObservable();
	constructor(private http: HttpClient) {
		urlApi = environment.urlApi;
	}
	IDMbUrl: any = [];

	getResponse() {
		for (let index in this.IDMbUrl) {
			this.getIdmb(this.IDMbUrl[index]).subscribe(data => {
				let newData = data;
				var result = newData.slice(16, -1);
				this.IDMbRating[index].idmb = JSON.parse(result).resource.rating;
			})
		}
	}

	createJSON() {
		this.IDMbRating.map((item) => {
			//IDMb-api code
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
			this.IDMbUrl.push(scriptTag.src);
		});
	}


	setIDMb() {
		this.createJSON();
		this.getResponse();
		this.IDMbArr.next(this.IDMbRating);
	}

	openSpinner(spinner: boolean) {
		this.showSpinner.next(spinner);
	}

	setModal(modalBody: any) {
		this.modalOpener.next(modalBody);
	}

	getIdmb(uri: string): Observable<any> {
		return this.http.get(uri, { responseType: 'text' }).pipe(
			tap(() => { }),
			catchError((err) => {
				return this.handleError(err);
			})
		);
	}

	get(uri: string): Observable<any> {
		this.openSpinner(true);
		return this.http.get(urlApi + '/' + uri).pipe(
			tap(() => { }),
			catchError((err) => {
				return this.handleError(err);
			}),
			tap(() => {
				this.openSpinner(false);
			})
		);
	}

	post(uri: string, data: object): Observable<any> {
		return this.http.post(urlApi + '/' + uri, data, httpOptions).pipe(
			tap((data: any) => { }),
			catchError((err) => {
				return this.handleError(err);
			})
		);
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
}
