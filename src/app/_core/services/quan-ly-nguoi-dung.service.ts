import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class QuanLyNguoiDungService {
	constructor() {}

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
}
