import { HomeAddonModule } from "./home-addon/home-addon.module";
import { LandingPageModule } from "./landing-page/landing-page.module";
import { CinemaPageModule } from "./cinema-page/cinema-page.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { MoviePageModule } from "./movie-page/movie-page.module";
import { NewsPageModule } from "./news-page/news-page.module";
import { HomeRoutingModule } from "./home-routing.module";
import { SpinnerModule } from "../spinner/spinner.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CinemaPageModule,
    LandingPageModule,
    MoviePageModule,
    NewsPageModule,
    HomeRoutingModule,
    SpinnerModule,
    HomeAddonModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
