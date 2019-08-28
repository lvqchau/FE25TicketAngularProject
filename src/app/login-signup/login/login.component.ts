import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hide: boolean = true;
  
  usernameForm = new FormControl("", [
    Validators.required,
    Validators.minLength(6)
  ]);

  PassForm = new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9]{6,15}$"),
    Validators.minLength(6)
  ]);

  getPassError() {
    return this.PassForm.hasError("required")
      ? "Bạn cần nhập mật khẩu"
      : this.PassForm.hasError("minlength")
        ? "Mật khẩu phải có ít nhất 6 kí tự"
        : this.PassForm.hasError("pattern")
          ? "Mật khẩu không được có ký tự đặc biệt"
          : "";
  }
  getUserError() {
    return this.usernameForm.hasError("required")
      ? "Bạn cần nhập tên tài khoản"
      : this.usernameForm.hasError("minlength")
        ? "Tên tài khoản phải có ít nhất 6 kí tự"
        : "";
  }
}
