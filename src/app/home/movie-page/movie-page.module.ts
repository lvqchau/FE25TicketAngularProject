import { MoviePageRoutingModule } from "./movie-page-routing.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoviePageComponent } from "./movie-page.component";

@NgModule({
  declarations: [MoviePageComponent],
  imports: [CommonModule, RouterModule, MoviePageRoutingModule],
  exports: [MoviePageComponent]
})
export class MoviePageModule {}
