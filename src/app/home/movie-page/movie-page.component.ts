import { QuanLyPhimService } from "src/app/_core/services/quan-ly-phim.service";
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-page",
  templateUrl: "./movie-page.component.html",
  styleUrls: ["./movie-page.component.scss"]
})
export class MoviePageComponent implements OnInit {
  ngOnInit() {
    this.getParamsFromURL();
    this.getMovieInfo();
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: QuanLyPhimService
  ) {}
  movieId: any;
  movieName: any;
  movieItem: any = [];
  getParamsFromURL() {
    this.movieId = this.activatedRoute.snapshot.paramMap.get("movieId");
  }

  getMovieInfo() {
    const uri = this.dataService.get(
      `QuanLyPhim/LayThongTinPhim?MaPhim=${this.movieId}`
    );
    uri.subscribe(data => {
      console.log(data);
      this.movieItem = data;
    });
  }
}
