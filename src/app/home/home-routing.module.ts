import { LandingPageModule } from "./landing-page/landing-page.module";
import { MoviePageModule } from "./movie-page/movie-page.module";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "land",
        loadChildren: () => LandingPageModule
      },
      {
        path: "phim/:movieId",
        loadChildren: () => MoviePageModule
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
