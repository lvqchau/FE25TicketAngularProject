import { QuanLyPhimService } from "src/app/_core/services/quan-ly-phim.service";
import { Component, Input, ViewEncapsulation, OnInit } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private phimManage: QuanLyPhimService) {}
  ngOnInit() {}
}
