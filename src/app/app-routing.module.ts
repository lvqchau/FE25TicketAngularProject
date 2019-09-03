import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', loadChildren: './home/home.module#HomeModule' },
	{
		path: 'dang-nhap',
		loadChildren: './login-signup/login-signup.module#LoginSignupModule'
	},

	{ path: 'dat-ve', loadChildren: './checkout/checkout.module#CheckoutModule' },
	{ path: 'admin', loadChildren: () => AdminModule }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
