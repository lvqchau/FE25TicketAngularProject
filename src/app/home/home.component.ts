import { QuanLyPhimService } from "./../_core/services/quan-ly-phim.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public dataService: QuanLyPhimService) {}
  showSpinner: boolean = true;
  ngOnInit() {
    this.getSpinner();
  }
  getSpinner() {
    setTimeout(() => {
      this.dataService.showSpinner.subscribe(data => {
        this.showSpinner = data;
      });
    }, 3000);
  }
}
