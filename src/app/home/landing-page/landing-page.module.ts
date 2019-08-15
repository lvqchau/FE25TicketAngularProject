import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingPageComponent } from "./landing-page.component";
import { SlickCarouselModule } from "ngx-slick-carousel";
@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, SlickCarouselModule],
  exports: [LandingPageComponent]
})
export class LandingPageModule {}
