import { Directive, OnInit, Input } from "@angular/core";

@Directive({
  selector: "[appImgHolder]",
  host: {
    "[attr.src]": "finalImage"
  }
})
export class ImgHolderDirective implements OnInit {
  constructor() { }

  downloadingImage: any;
  finalImage: any;
  @Input("appImgHolder") targetSource: string;

  @Input() defaultImage: string = "assets/img/null-movie.png";

  ngOnInit() {
    this.finalImage = this.defaultImage;

    this.downloadingImage = new Image();
    this.downloadingImage.onload = () => {
      this.finalImage = this.targetSource;
    };

    this.downloadingImage.src = this.targetSource;
  }
}
