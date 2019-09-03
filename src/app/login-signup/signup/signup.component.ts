import { Router } from '@angular/router';
import { QuanLyNguoiDungService } from 'src/app/_core/services/quan-ly-nguoi-dung.service';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';

import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-signup',
	templateUrl: './signup.component.html',
	styleUrls: [ './signup.component.scss' ]
})
export class SignupComponent implements OnInit {
	constructor(
		private dataService: QuanLyPhimService,
		private userService: QuanLyNguoiDungService,
		private router: Router
	) {}

	ngOnInit() {}
	value = 'Đăng ký';
	valuebool = 'đã';
	signUp: boolean = true;
	hide: boolean = true;
	groupCode: string;

	userList: {
		taiKhoan: string;
		matKhau: string;
		email: string;
		hoTen: string;
		soDT: string;
	}[] = [];

	changeForm() {
		this.signUp = !this.signUp;
		if (this.signUp) {
			this.value = 'Đăng ký';
			this.valuebool = 'đã';
		} else {
			this.value = 'Đăng nhập';
			this.valuebool = 'chưa';
		}
	}

	formSU = new FormGroup({
		usernameForm: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
		emailForm: new FormControl('', [ Validators.required, Validators.email ]),
		passForm: new FormControl('', [
			Validators.required,
			Validators.pattern('^[a-zA-Z0-9]{6,15}$'),
			Validators.minLength(6)
		])
	});

	hasError = (controlName: string, errorName: string) => {
		return this.formSU.controls[controlName].hasError(errorName);
	};

	setGP() {
		this.dataService.maNhom.subscribe((code) => {
			this.groupCode = code;
		});
		return this.groupCode;
	}

	signUpForm(SUvalue) {
		this.userList.push(SUvalue);
		const user = {
			taiKhoan: this.formSU.controls['usernameForm'].value,
			matKhau: this.formSU.controls['passForm'].value,
			email: this.formSU.controls['emailForm'].value,
			soDt: '',
			maNhom: this.setGP(),
			maLoaiNguoiDung: 'KhachHang',
			hoTen: ''
		};
		const uri = 'QuanLyNguoiDung/DangKy';
		this.dataService.post(uri, user).subscribe((data) => {
			this.userService.setUser(user);
			localStorage.clear();
			this.router.navigate([ 'land' ]);
		});
	}
}
