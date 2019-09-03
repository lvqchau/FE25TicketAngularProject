import { LoginSignupModule } from "./login-signup/login-signup.module";
import { MaterialModule } from "./_core/material/material.module";
import { CheckoutModule } from "./checkout/checkout.module";
import { HomeModule } from "./home/home.module";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatMenuModule } from "@angular/material/menu";
import { MatTabsModule } from "@angular/material/tabs";
import { MatSelectModule } from "@angular/material/select";
import { SlickCarouselModule } from "ngx-slick-carousel";
import { HttpClientModule } from "@angular/common/http";
import { SpinnerModule } from "./spinner/spinner.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    SlickCarouselModule,
    HomeModule,
    CheckoutModule,
    MaterialModule,
    HttpClientModule,
    LoginSignupModule,
    SpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
