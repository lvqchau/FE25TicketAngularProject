import { QuanLyPhimService } from "./../../shared/services/quan-ly-phim.service";
import {
  Component,
  Input,
  ViewEncapsulation,
  OnInit,
} from "@angular/core";
import { timer } from "rxjs";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent implements OnInit {
  constructor(public dataService: QuanLyPhimService) { }
  showSpinner: boolean = true;

  getSpinner() {
    // this.dataService.showSpinner.subscribe(data => {
    //   this.showSpinner = data;
    // });
    setTimeout(() => {
      this.dataService.spinned.subscribe(data => {
        this.showSpinner = data;
      });
      // if (this.showSpinner == false) {
      //   document.getElementById("hideTemplate").classList.add("active");
      // }
    }, 3000);
  }
  ngOnInit() {
    this.getSpinner();
  }

  consoleCur(value) {
    this.timeForCine = this.dateList[value];
    this.daySetUp();
  }
  timeForCine: any = [];
  @Input() public movieChosen: string;
  title = "AngularProjectHTML";
  slideMovieConfig = {
    slidesPerRow: 4,
    rows: 2,
    infinite: true,
    nextArrow: "<button class='slick-next slick-arrow'></button>",
    prevArrow: "<button class='slick-prev slick-arrow'></span></button>",
    arrows: true
  };

  hideOtherBtn(value) {
    value -= 1;
    let dropdown = document.getElementsByClassName("cinema__dropdown");
    for (let i = 0; i < dropdown.length; i++) {
      let btn = dropdown[i].getElementsByClassName("dropdown-menu").item(0)
        .classList;
      if (i != value) {
        btn.remove("show");
      } else if (i === value) {
        if (!btn.contains("show")) {
          btn.remove("show");
        } else {
          btn.add("show");
        }
      }
    }
  }

  daySetUp() {
    for (let i = 2; i < this.dateList[0].dateArrange.length; i++) {
      let curDate = new Date();

      //"Hôm nay": T7: 6
      let curDay: number = new Date().getDay();
      //skip qua "Ngày mai" : CN: 0
      if (curDay + 1 === 7) curDay = 0;
      else curDay = curDay + 1;

      switch (i) {
        case 2:
          curDay = curDay + 1;
          break;
        case 3:
          curDay = curDay + 2;
          break;
        case 4:
          curDay = curDay + 3;
          break;
        case 5:
          curDay = curDay + 4;
          break;
      }
      switch (curDay) {
        case 0:
          this.dateList[0].dateArrange[i].DOW = "Chủ Nhật";
          break;
        case 1:
          this.dateList[0].dateArrange[i].DOW = "Thứ Hai";
          break;
        case 2:
          this.dateList[0].dateArrange[i].DOW = "Thứ Ba";
          break;
        case 3:
          this.dateList[0].dateArrange[i].DOW = "Thứ Tư";
          break;
        case 4:
          this.dateList[0].dateArrange[i].DOW = "Thứ Năm";
          break;
        case 5:
          this.dateList[0].dateArrange[i].DOW = "Thứ Sáu";
          break;
        case 6:
          this.dateList[0].dateArrange[i].DOW = "Thứ Bảy";
          break;
      }
    }
  }

  statusCinema: boolean = false;
  statusDate: boolean = false;
  statusTime: boolean = false;
  selectedMovie: string = "Phim";
  selectedCinema: string = "Cụm rạp";
  selectedDate: string = "Ngày xem";
  selectedTime: string = "Xuất chiếu";

  //Table_0: Movie_id | Movie_title -- tất cả các movies của tất cả các brand
  movieArray = [
    {
      movie_id: 1,
      movie_title: "Người nhện xa nhà"
    },
    {
      movie_id: 2,
      movie_title: "Coco"
    },
    {
      movie_id: 3,
      movie_title: "IT"
    },
    {
      movie_id: 4,
      movie_title: "Mama"
    },
    {
      movie_id: 5,
      movie_title: "Avengers"
    }
  ];

  //Arrays
  cinemaList = ["CGV", "BHD"];
  cinemaListArray = [
    {
      branch: "CGV 1",
      movie: [1, 2, 3, 4]
    },
    {
      branch: "CGV 2",
      movie: [1, 3, 4]
    },
    {
      branch: "BHD 1",
      movie: [2, 5, 1]
    },
    {
      branch: "BHD 2",
      movie: [1, 2, 3, 4, 5]
    }
  ];
  dateList = [
    {
      cine_id: "1",
      dateArrange: [
        {
          date: new Date(),
          DOW: "Hôm nay"
        },
        {
          date: new Date().setDate(new Date().getDate() + 1),
          DOW: "Ngày mai"
        },
        {
          date: new Date().setDate(new Date().getDate() + 2),
          DOW: ""
        },
        {
          date: new Date().setDate(new Date().getDate() + 3),
          DOW: ""
        },
        {
          date: new Date().setDate(new Date().getDate() + 4),
          DOW: ""
        },
        {
          date: new Date().setDate(new Date().getDate() + 5),
          DOW: ""
        }
      ]
    },
    {
      cine_id: "2",
      dateArrange: [
        {
          date: new Date(),
          DOW: "Hôm nay"
        },
        {
          date: new Date().setDate(new Date().getDate() + 1),
          DOW: "Ngày mai"
        },
        {
          date: new Date().setDate(new Date().getDate() + 2),
          DOW: ""
        },
        {
          date: new Date().setDate(new Date().getDate() + 3),
          DOW: ""
        }
      ]
    }
  ];
  timeList = [
    "08:30",
    "09:30",
    "10:30",
    "11:30",
    "12:30",
    "13:30",
    "14:30",
    "15:30",
    "16:30"
  ];

  formatDate(date) {
    let d = new Date(date);
    let day;
    let month;
    let year = d.getFullYear();
    month = d.getMonth() + 1;
    day = d.getDate();
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return [day, month, year].join("-");
  }
  getEleClass(value) {
    return document.getElementById(value).getElementsByTagName("ul")[0]
      .classList;
  }

  setSelected(value, check) {
    let movieDrop = this.getEleClass("movie__dropdown");
    let cinemaDrop = this.getEleClass("cinemas__dropdown");
    let dateDrop = this.getEleClass("date__dropdown");
    let timeDrop = this.getEleClass("time__dropdown");
    let orderBtn = document.getElementById("ticket__btn").classList;
    orderBtn.remove("order__ticket");
    if (check === 1) {
      movieDrop.remove("show");
      this.selectedMovie = value;
      this.selectedCinema = "Cụm rạp";
      this.selectedDate = "Ngày xem";
      this.selectedTime = "Xuất chiếu";
      this.statusCinema = true;
      cinemaDrop.add("show");
    } else if (check === 2) {
      cinemaDrop.remove("show");
      this.selectedCinema = value;
      this.selectedDate = "Ngày xem";
      this.selectedTime = "Xuất chiếu";
      this.statusDate = true;
      dateDrop.add("show");
    } else if (check === 3) {
      dateDrop.remove("show");
      this.selectedDate = this.formatDate(value);
      this.selectedTime = "Xuất chiếu";
      this.statusTime = true;
      timeDrop.add("show");
    } else if (check === 4) {
      this.selectedTime = value;
      timeDrop.remove("show");
      orderBtn.add("order__ticket");
    }

    // this.movieStatus = false;
  }
}
