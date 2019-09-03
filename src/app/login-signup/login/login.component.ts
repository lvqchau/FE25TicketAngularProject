import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Router } from '@angular/router';
import { QuanLyNguoiDungService } from 'src/app/_core/services/quan-ly-nguoi-dung.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, NgForm } from '@angular/forms';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	hide: boolean = true;

	// @ViewChild('foobarElement', { static: false })
	// foobarElement: NgForm;

	constructor(
		private userService: QuanLyNguoiDungService,
		private router: Router,
		private dataService: QuanLyPhimService
	) { }

	ngOnInit() {

	}

	formLI = new FormGroup({
		usernameForm: new FormControl('', Validators.required),
		passForm: new FormControl('', Validators.required),
		checkBoxValue: new FormControl('', Validators.nullValidator)
	});

	hasError = (controlName: string, errorName: string) => {
		return this.formLI.controls[controlName].hasError(errorName);
	};

	logInForm(LIvalue) {
		const checked = this.formLI.controls['checkBoxValue'].value;
		const user = {
			taiKhoan: this.formLI.controls['usernameForm'].value,
			matKhau: this.formLI.controls['passForm'].value
		};
		const uri = 'QuanLyNguoiDung/DangNhap';
		this.dataService.post(uri, user).subscribe((data) => {
			const curUser = {
				taiKhoan: data.taiKhoan,
				matKhau: data.matKhau,
				email: data.email,
				maNhom: data.maNhom,
				maLoaiNguoiDung: data.maLoaiNguoiDung
			}
			this.userService.setUser(data);
			if (checked == true) {
				this.userService.setRemember(true);
				localStorage.setItem('info', JSON.stringify(curUser));
				document.cookie = 'token = ' + data.accessToken;
			}
			this.router.navigate(['land']);
		});
	}
}
