import { PipeModule } from './../_core/pipe/pipe.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [SharedComponent, ModalComponent],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [
    SharedComponent, ModalComponent
  ]
})
export class SharedModule { }
