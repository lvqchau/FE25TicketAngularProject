import { LandingPageModule } from "./landing-page/landing-page.module";
import { CinemaPageModule } from "./cinema-page/cinema-page.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { MoviePageModule } from "./movie-page/movie-page.module";
import { NewsPageModule } from "./news-page/news-page.module";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MovieTicketboxComponent } from "./movie-ticketbox/movie-ticketbox.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MovieTicketboxComponent
  ],
  imports: [
    CommonModule,
    CinemaPageModule,
    LandingPageModule,
    MoviePageModule,
    NewsPageModule
  ],
  exports: [HomeComponent]
})
export class HomeModule {}
