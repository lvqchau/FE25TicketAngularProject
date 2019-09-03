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
	constructor(private http: HttpClient) {
		urlApi = environment.urlApi;
	}
	private showSpinner = new BehaviorSubject<boolean>(false);
	public spinned = this.showSpinner.asObservable();
	private groupCode = new BehaviorSubject<string>('GP06');
	public maNhom = this.groupCode.asObservable();
	private modalOpener = new BehaviorSubject<any>('');
	public modalObserver = this.modalOpener.asObservable();

	openSpinner(spinner: boolean) {
		this.showSpinner.next(spinner);
	}

	setModal(modalBody: any) {
		this.modalOpener.next(modalBody);
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
