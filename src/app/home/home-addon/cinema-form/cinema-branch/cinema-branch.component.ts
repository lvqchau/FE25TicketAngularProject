import { Component, OnInit, Input } from '@angular/core';
import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';

@Component({
  selector: 'app-cinema-branch',
  templateUrl: './cinema-branch.component.html',
  styleUrls: ['./cinema-branch.component.scss']
})
export class CinemaBranchComponent implements OnInit {

  @Input() maRap;
  @Input() curCine;
  constructor(private dataService: QuanLyPhimService) { }
  branchArr = [];
  ngOnInit() {
    this.getBranchOfCine();
  }

  getBranchOfCine() {
    const uri = `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${this.maRap}`;
    this.dataService.get(uri).subscribe(data => {
      this.branchArr = data;
    });
  }
}
