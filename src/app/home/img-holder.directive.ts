import { Directive, OnInit, Input } from "@angular/core";

@Directive({
  selector: "[appImgHolder]",
  host: {
    "[attr.src]": "finalImage" //the attribute of the host element we want to update. in this case, <img 'src' />
  }
})
export class ImgHolderDirective implements OnInit {
  constructor() {}

  downloadingImage: any;
  finalImage: any;
  @Input("appImgHolder") targetSource: string;

  @Input() defaultImage: string = "assets/img/null-movie.png";

  ngOnInit() {
    //First set the final image to some default image while we prepare our preloader:
    this.finalImage = this.defaultImage;

    this.downloadingImage = new Image(); // create image object
    this.downloadingImage.onload = () => {
      //Once image is completed, switch our host attribute
      this.finalImage = this.targetSource; //do the switch
    };

    this.downloadingImage.src = this.targetSource;
  }
}
