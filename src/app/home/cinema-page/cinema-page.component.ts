import { QuanLyPhimService } from 'src/app/shared/services/quan-ly-phim.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema-page',
  templateUrl: './cinema-page.component.html',
  styleUrls: ['./cinema-page.component.scss']
})
export class CinemaPageComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: QuanLyPhimService
  ) { }

  branchId: any;
  branchCode: any;
  branchArr: any = [];
  ngOnInit() {
    this.getParamsFromURL();
    this.getBranchInfo();
  }

  getParamsFromURL() {
    this.branchId = this.activatedRoute.snapshot.paramMap.get("rapId");
  }

  findBranchCode() {
    const maRap = this.branchId.split('-')[0];
    switch (maRap) {
      case 'bhd': return "BHDStar";
      case 'cgv': return "CGV";
      case 'cns': return "CineStar";
      case 'glx': return "Galaxy";
      case 'lotte': return "LotteCinima";
      case 'megags': return "MegaGS";
      default: return '';
    }
  }

  getBranchInfo() {
    let uriCode: string = this.findBranchCode();
    const uri = `QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${uriCode}`;
    this.dataService.get(uri).subscribe(data => {
      data.map(item => {
        if (item.maCumRap === this.branchId) {
          this.branchArr = item;
          return;
        }
      })
      console.log(this.branchArr);
    });
  }
}
