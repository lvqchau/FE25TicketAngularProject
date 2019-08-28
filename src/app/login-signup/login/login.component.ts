import { Router } from '@angular/router';
import { QuanLyNguoiDungService } from 'src/app/_core/services/quan-ly-nguoi-dung.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	hide: boolean = true;

	constructor(private userService: QuanLyNguoiDungService, private router: Router) {}

	ngOnInit() {}

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
		this.userService.userConfirm(user).subscribe((data) => {
			this.userService.setUser(data);
			if (checked == true) {
				this.userService.setRemember(true);
				localStorage.setItem('user_profile', JSON.stringify(data));
			} else {
				localStorage.clear();
			}
			this.router.navigate([ 'land' ]);
		});
	}
}
