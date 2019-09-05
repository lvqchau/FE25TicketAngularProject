import { QuanLyPhimService } from 'src/app/shared/services/quan-ly-phim.service';
import { Component, OnInit, Input, Inject } from "@angular/core";

@Component({
  selector: "app-landing-movieitem",
  templateUrl: "./landing-movieitem.component.html",
  styleUrls: ["./landing-movieitem.component.scss"]
})
export class LandingMovieitemComponent implements OnInit {
  @Input() movie;
  constructor(private dataService: QuanLyPhimService) { }

  ngOnInit() {
    this.setTrailer();
  }

  setTrailer() {
    this.dataService.setModal(this.movie.trailer);
  }


}
