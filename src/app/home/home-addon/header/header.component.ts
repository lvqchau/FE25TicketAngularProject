import { QuanLyNguoiDungService } from 'src/app/shared/services/quan-ly-nguoi-dung.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	username: string;
	constructor(private userService: QuanLyNguoiDungService) {
		this.userService.userAcc.subscribe((usr) => {
			this.username = usr.taiKhoan;
		});
	}

	ngOnInit() {
		if (localStorage.getItem('info')) {
			this.username = JSON.parse(localStorage.getItem('info')).taiKhoan;
		}
	}

	resetStorage() {
		localStorage.clear();
		document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
	}
}
