import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-landing-movieitem",
  templateUrl: "./landing-movieitem.component.html",
  styleUrls: ["./landing-movieitem.component.scss"]
})
export class LandingMovieitemComponent implements OnInit {
  @Input() movie;
  constructor() {}

  ngOnInit() {}
}
