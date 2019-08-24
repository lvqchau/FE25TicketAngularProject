import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators
} from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

/** Error when invalid control is dirty, touched, or submitted. */

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  constructor() {}
  usernameForm = new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9]{6,15}$")
  ]);
  emailForm = new FormControl("", [Validators.required, Validators.email]);
  PassForm = new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9]{6,15}$"),
    Validators.minLength(6)
  ]);
  hide = true;
  hideRe = true;

  getErrorMessage() {
    return this.emailForm.hasError("required")
      ? "Bạn cần nhập email"
      : this.emailForm.hasError("email")
      ? "Email không hợp lệ"
      : "";
  }
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
      : this.usernameForm.hasError("pattern")
      ? "Tên tài khoản không được có ký tự đặc biệt"
      : "";
  }
  ngOnInit() {}
}
