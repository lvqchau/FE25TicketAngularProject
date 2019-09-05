import { PipeModule } from './../../shared/pipe/pipe.module';
import { HomeAddonModule } from './../home-addon/home-addon.module';
import { MoviePageRoutingModule } from "./movie-page-routing.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviePageComponent } from "./movie-page.component";
import { MovieInfoComponent } from "./movie-info/movie-info.component";
import { MovieRatingComponent } from "./movie-rating/movie-rating.component";
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    MoviePageComponent,
    MovieInfoComponent,
    MovieRatingComponent,
    MovieDetailComponent
  ],
  imports: [CommonModule, RouterModule, MoviePageRoutingModule, MaterialModule, HomeAddonModule, PipeModule],
  exports: [
    MoviePageComponent,
    MovieInfoComponent,
    MovieRatingComponent,
    MovieDetailComponent
  ]
})
export class MoviePageModule { }
