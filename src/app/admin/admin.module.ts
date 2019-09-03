import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

@NgModule({
	declarations: [AdminComponent],
	imports: [CommonModule, RouterModule, AdminRoutingModule],
	exports: [AdminComponent]
})
export class AdminModule { }
