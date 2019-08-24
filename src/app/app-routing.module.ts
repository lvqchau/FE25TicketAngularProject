import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "dang-nhap",
    loadChildren: "./login-signup/login-signup.module#LoginSignupModule"
  },
  { path: "", loadChildren: "./home/home.module#HomeModule" },
  { path: "dat-ve", loadChildren: "./checkout/checkout.module#CheckoutModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
