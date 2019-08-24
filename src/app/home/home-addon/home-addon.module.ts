import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeAddonComponent } from "./home-addon.component";
import { CinemaFormComponent } from "./cinema-form/cinema-form.component";
import { CinemaBranchComponent } from "./cinema-form/cinema-branch/cinema-branch.component";
import { BranchMovieComponent } from "./cinema-form/branch-movie/branch-movie.component";

@NgModule({
  declarations: [
    HomeAddonComponent,
    FooterComponent,
    HeaderComponent,
    CinemaFormComponent,
    CinemaBranchComponent,
    BranchMovieComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HomeAddonComponent,
    FooterComponent,
    HeaderComponent,
    CinemaFormComponent,
    CinemaBranchComponent,
    BranchMovieComponent
  ]
})
export class HomeAddonModule {}
