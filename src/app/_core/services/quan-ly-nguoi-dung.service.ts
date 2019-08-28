import { User } from './../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};

@Injectable({
	providedIn: 'root'
})
export class QuanLyNguoiDungService {
	constructor(private httpClient: HttpClient) {}

	private remember = new BehaviorSubject<boolean>(false);
	public isRemembered = this.remember.asObservable();

	private _user = {
		taiKhoan: 'Đăng nhập',
		matKhau: '',
		email: '',
		maNhom: '',
		maLoaiNguoiDung: ''
	};
	private user = new BehaviorSubject<any>(this._user);
	public userAcc = this.user.asObservable();

	setUser(newUser) {
		this.user.next(newUser);
	}

	setRemember(checkbox) {
		this.remember.next(checkbox);
	}

	userConfirm(user: any): Observable<any> {
		const url = 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap';
		return this.httpClient.post(url, user, httpOptions).pipe(
			tap((data: any) => {}),
			catchError((err) => {
				return this.handleError(err);
			})
		);
	}

	registerUser(user: any): Observable<any> {
		const url = 'http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy';
		return this.httpClient.post(url, user, httpOptions).pipe(
			tap((data: any) => {}),
			catchError((err) => {
				return this.handleError(err);
			})
		);
	}
	handleError(err) {
		//dùng switch nếu quá nhiều status
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
