import { LoginComponent } from "./login/login.component";
import { LoginSignupComponent } from "./login-signup.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
  {
    path: "",
    component: LoginSignupComponent,
    children: [
      {
        path: "",
        component: SignupComponent
      },
      {
        path: "",
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
