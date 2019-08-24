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
  movieItem: any = [];
  movieIDMb: any = [
    {
      biDanh: "ted-2",
      idmb: "tt2637276"
    },
    {
      biDanh: "trainwreck",
      idmb: "tt3152624"
    },
    {
      biDanh: "inside-out",
      idmb: "tt2096673"
    },
    {
      biDanh: "home",
      idmb: "tt2224026"
    },
    {
      biDanh: "batman-v-superman-dawn-of-justice",
      idmb: "tt2975590"
    },
    {
      biDanh: "ant-man",
      idmb: "tt5180836"
    },
    {
      biDanh: "jurassic-world",
      idmb: "tt0369610"
    },
    {
      biDanh: "fantastic-four",
      idmb: "tt1502712"
    },
    {
      biDanh: "mad-max-fury-road",
      idmb: "tt1392190"
    },
    {
      biDanh: "true-detective",
      idmb: "tt2356777"
    },
    {
      biDanh: "the-longest-ride",
      idmb: "tt2726560"
    },
    {
      biDanh: "the-walking-dead",
      idmb: "tt1520211"
    },
    {
      biDanh: "southpaw",
      idmb: "tt1798684"
    },
    {
      biDanh: "specter",
      idmb: "tt2379713"
    }
  ];

  getParamsFromURL() {
    this.movieId = this.activatedRoute.snapshot.paramMap.get("movieId");
  }

  getMovieInfo() {
    const uri = this.dataService.get(
      `QuanLyPhim/LayThongTinPhim?MaPhim=${this.movieId}`
    );
    uri.subscribe(data => {
      this.movieItem = data;
      this.movieItem.thoiLuong = data.lichChieu[0].thoiLuong;
      this.movieIDMb.map(itemRate => {
        if (this.movieItem.biDanh === itemRate.biDanh) {
          this.movieItem.idmb = itemRate.idmb;
        }
      });

      console.log(this.movieItem);
    });
  }
}
