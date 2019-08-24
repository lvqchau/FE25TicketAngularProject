import { MoviePageRoutingModule } from "./movie-page-routing.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviePageComponent } from "./movie-page.component";
import { MovieInfoComponent } from "./movie-info/movie-info.component";
import { MovieRatingComponent } from "./movie-rating/movie-rating.component";
import { MovieBookingComponent } from "./movie-booking/movie-booking.component";

@NgModule({
  declarations: [
    MoviePageComponent,
    MovieInfoComponent,
    MovieRatingComponent,
    MovieBookingComponent
  ],
  imports: [CommonModule, RouterModule, MoviePageRoutingModule],
  exports: [
    MoviePageComponent,
    MovieInfoComponent,
    MovieRatingComponent,
    MovieBookingComponent
  ]
})
export class MoviePageModule {}
