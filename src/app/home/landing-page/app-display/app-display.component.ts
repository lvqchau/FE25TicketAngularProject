import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-app-display",
  templateUrl: "./app-display.component.html",
  styleUrls: ["./app-display.component.scss"]
})
export class AppDisplayComponent implements OnInit {
  slideMovieConfig = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplaySpeed: 1500
  };
  constructor() {}

  ngOnInit() {}
}
