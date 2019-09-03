import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalBody: any;
  constructor(
    private dataService: QuanLyPhimService,
    public sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.modalBody = null;
    this.inputModalBody();
  }

  inputModalBody() {
    this.dataService.modalObserver.subscribe(data => {
      this.modalBody = data;
    })
  }

  resetModal() {
    this.modalBody = null;
  }

  modalBodyUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.modalBody);
  }


}
