import { QuanLyPhimService } from 'src/app/_core/services/quan-ly-phim.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-branch-movie',
  templateUrl: './branch-movie.component.html',
  styleUrls: ['./branch-movie.component.scss']
})
export class BranchMovieComponent implements OnInit {
  constructor(private dataService: QuanLyPhimService) { }
  @Input() curCine; //const cineID = bhd-cineplex-quang-trung
  @Input() cineCode; //passed in through cinema-form => bhdStar
  @Input() curBr; //cns-hai-ba-trung => const code = 0
  groupCode: string = this.dataService.maNhom.value;
  //array chứa danh sách phim của chi nhánh có tên curCine
  cineArr = [];
  movieListArr = [];
  unavailable: boolean = false;
  curDay = new Date("January 02, 2019 18:30");

  filteredArrForAll = [];
  ngOnInit() {
    this.getScheduleOfBranch();
  }
  
  getDateFormatted() {
    //split('T')   replace('T', ' ')
    //return an array ['2019-01-02', '10:30:00'] if split
    return new Date(this.curDay.getTime() - this.curDay.getTimezoneOffset() * 6e4).toISOString().substr(0, 19);
  }

  getScheduleOfBranch() {
    const uri = `/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${this.cineCode}&maNhom=${this.groupCode}`;
    
    this.dataService.get(uri).subscribe(data => {
        
      data[0].lstCumRap.map(item => {

        if (item.maCumRap === this.curCine) {
          // array = [
          //  { maPhim: 23, 
          //    tenPhim: Baymax,
          //    rap: [
          //       { maRap: 472, tenRap: 2, ngayChieuGioChieu: [2019, 2017, 2015, 2013, ...] },
          //       { maRap: 473, tenRap: 3, ngayChieuGioChieu: [2020, 2018, 2016, 2014, ...] }
          //     ]
          //  }
          // ]
          this.movieListArr = item.danhSachPhim;
        }
      })
      
      if (this.movieListArr === undefined || this.movieListArr.length === 0) {
        this.unavailable = true;
      }
      else {
        this.movieListArr.map(item => {
          
        });
      }
    });
    
  }


}
