import { Component, OnInit } from "@angular/core";
import { QuanLyPhimService } from "src/app/_core/services/quan-ly-phim.service";

@Component({
  selector: "app-landing-movielist",
  templateUrl: "./landing-movielist.component.html",
  styleUrls: ["./landing-movielist.component.scss"]
})
export class LandingMovielistComponent implements OnInit {
  slideMovieConfig = {
    slidesPerRow: 4,
    rows: 2,
    infinite: true,
    nextArrow: "<button class='slick-next slick-arrow'></button>",
    prevArrow: "<button class='slick-prev slick-arrow'></span></button>",
    arrows: true
  };

  movieList: any = [];

  constructor(private phimService: QuanLyPhimService) {}

  ngOnInit() {
    this.getMovieList();
  }
  getMovieList() {
    this.phimService.getListMovie().subscribe(data => {
      this.movieList = data;
      this.movieList;
    });
  }
}
