import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: AdminComponent
		// children: [
		//     {
		//         path: "dashboard",
		//         loadChildren: () => DashboardModule
		//     }
		// ]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class AdminRoutingModule {}
