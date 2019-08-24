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
  constructor(private dataService: QuanLyPhimService) {}

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    const uri = this.dataService.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP06");

    let uriLength: any;
    uri.subscribe(data => {
      this.dataService.showSpinner.next(true);
      this.movieList = data;
      this.movieList.map(item => {
        this.movieIDMb.map(itemRate => {
          uriLength = this.dataService.get(
            `QuanLyPhim/LayThongTinPhim?MaPhim=${item.maPhim}`
          );
          uriLength.subscribe(data2 => {
            item.thoiLuong = data2.lichChieu[0].thoiLuong;
          });
          if (itemRate.biDanh === item.biDanh) {
            item.idmb = itemRate.idmb;
          }
        });
      });
      console.log(this.movieList);
    });
    this.dataService.showSpinner.next(false);
  }
}
