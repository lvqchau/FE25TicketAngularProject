import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsPageComponent } from "./news-page.component";

@NgModule({
  declarations: [NewsPageComponent],
  imports: [CommonModule],
  exports: [NewsPageComponent]
})
export class NewsPageModule {}
