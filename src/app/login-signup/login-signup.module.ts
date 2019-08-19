import { MaterialModule } from "./../_core/material/material.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginSignupComponent } from "./login-signup.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { FbBtnComponent } from "./fb-btn/fb-btn.component";

@NgModule({
  declarations: [
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    FbBtnComponent
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    LoginSignupComponent,
    LoginComponent,
    SignupComponent,
    FbBtnComponent
  ]
})
export class LoginSignupModule {}
