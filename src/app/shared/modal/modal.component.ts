import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from '../services/quan-ly-phim.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  modalBody: any;
  constructor(
    private dataService: QuanLyPhimService
  ) { }

  ngOnInit() {
    this.modalBody = '';
    this.inputModalBody();
  }

  inputModalBody() {
    this.dataService.modalObserver.subscribe(data => {
      this.modalBody = data;
    })
  }

  resetModal() {
    this.modalBody = '';
  }

}
