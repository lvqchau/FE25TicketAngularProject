import { QuanLyNguoiDungService } from 'src/app/shared/services/quan-ly-nguoi-dung.service';
import { Component, Input, ViewEncapsulation, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private userService: QuanLyNguoiDungService) { }

  ngOnInit() {
  }

}
