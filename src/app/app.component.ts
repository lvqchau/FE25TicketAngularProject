import { QuanLyPhimService } from "src/app/_core/services/quan-ly-phim.service";
import { Component, Input, ViewEncapsulation, OnInit } from "@angular/core";
import $ from "jquery";
declare var FB: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private phimManage: QuanLyPhimService) {}

  facebook = {
    username: "",
    email: ""
  };
  fb_img: any;
  ngOnInit() {
    // (window as any).fbAsyncInit = function() {
    //   FB.init({
    //     appId: "2456176138002657",
    //     cookie: true,
    //     xfbml: true,
    //     version: "v3.1"
    //   });
    //   FB.AppEvents.logPageView();
    // };
    // (function(d, s, id) {
    //   var js,
    //     fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) {
    //     return;
    //   }
    //   js = d.createElement(s);
    //   js.id = id;
    //   js.src = "https://connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // })(document, "script", "facebook-jssdk");
  }
  // submitLogin() {
  //   console.log("submit login to facebook");
  //   // FB.login();
  //   FB.login(response => {
  //     console.log("submitLogin", response);
  //     if (response.authResponse) {
  //       this.callFBapi(response);
  //     } else {
  //       console.log("User login failed");
  //     }
  //   });
  // }

  // callFBapi(response) {
  //   FB.api(
  //     `/1358110637674329/`,
  //     "GET",
  //     { fields: "email, first_name, name, id, picture" },
  //     function(response) {
  //       this.facebook.username = response.name;
  //       this.facebook.email = response.email;
  //       this.fb_img = response.picture.data.url;
  //     }
  //   );
  // }
}
