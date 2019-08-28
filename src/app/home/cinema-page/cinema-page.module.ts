import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CinemaPageComponent } from "./cinema-page.component";
import { CinemaPageRoutingModule } from './cinema-page-routing.module';

@NgModule({
  declarations: [CinemaPageComponent],
  imports: [CommonModule, CinemaPageRoutingModule, RouterModule],
  exports: [CinemaPageComponent]
})
export class CinemaPageModule {}
