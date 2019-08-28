import { ImgHolderDirective } from './../img-holder.directive';
import { SpinnerModule } from './../../spinner/spinner.module';
import { LandingRoutingModule } from './landing-page-routing.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../../_core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LandingCarouselComponent } from './landing-carousel/landing-carousel.component';
import { LandingMovielistComponent } from './landing-movielist/landing-movielist.component';
import { LandingAdComponent } from './landing-ad/landing-ad.component';
import { LandingNewsComponent } from './landing-news/landing-news.component';
import { LandingMovieitemComponent } from './landing-movielist/landing-movieitem/landing-movieitem.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { AppDisplayComponent } from './app-display/app-display.component';
import { HomeAddonModule } from '../home-addon/home-addon.module';
@NgModule({
	declarations: [
		LandingPageComponent,
		LandingCarouselComponent,
		LandingMovielistComponent,
		LandingAdComponent,
		LandingNewsComponent,
		LandingMovieitemComponent,
		SubscriptionComponent,
		AppDisplayComponent,
		ImgHolderDirective
	],
	imports: [
		CommonModule,
		SlickCarouselModule,
		MaterialModule,
		RouterModule,
		LandingRoutingModule,
		SpinnerModule,
		HomeAddonModule
	],
	exports: [
		LandingPageComponent,
		LandingCarouselComponent,
		LandingMovielistComponent,
		LandingAdComponent,
		LandingNewsComponent,
		LandingMovieitemComponent,
		SubscriptionComponent,
		AppDisplayComponent
	]
})
export class LandingPageModule {}
