import { PipeModule } from './pipe/pipe.module';
import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ModalComponent],
  imports: [
    CommonModule,
    PipeModule
  ],
  exports: [ModalComponent]
})
export class SharedModule { }
