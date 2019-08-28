import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";


@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor() { }
  ngOnInit() { }
  value = 'Đăng ký';
  valuebool = 'đã';
  signUp: boolean = true;
  changeForm() {
    this.signUp = !this.signUp;
    if (this.signUp) {
      this.value = "Đăng ký";
      this.valuebool = "đã";
    } else {
      this.value = 'Đăng nhập';
      this.valuebool = 'chưa';
    }
  }


  usernameForm = new FormControl("", [
    Validators.required,
    Validators.minLength(6)
  ]);

  emailForm = new FormControl("", [Validators.required, Validators.email]);
  SDTForm = new FormControl("", [Validators.required]);
  HoTenForm = new FormControl("", [Validators.required]);
  PassForm = new FormControl("", [
    Validators.required,
    Validators.pattern("^[a-zA-Z0-9]{6,15}$"),
    Validators.minLength(6)
  ]);
  hide:boolean = true;

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
      : this.usernameForm.hasError("minlength")
      ? "Tên tài khoản phải có ít nhất 6 kí tự"
      : "";
  }
  getPhoneError() {
    return this.SDTForm.hasError("required")
      ? "Bạn cần nhập số điện thoại"
        : "";
  }
  getFullNameError() {
    return this.HoTenForm.hasError("required")
      ? "Bạn cần nhập họ tên"
      : "";
  }
  

  
}
