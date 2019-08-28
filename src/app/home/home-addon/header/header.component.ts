import { QuanLyNguoiDungService } from 'src/app/_core/services/quan-ly-nguoi-dung.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {
	username: string;
	constructor(private userService: QuanLyNguoiDungService) {
		this.userService.userAcc.subscribe((usr) => {
			this.username = usr.taiKhoan;
		});
	}

	ngOnInit() {
		if (localStorage.getItem('user_profile')) {
			this.username = JSON.parse(localStorage.getItem('user_profile')).taiKhoan;
		}
	}
}
