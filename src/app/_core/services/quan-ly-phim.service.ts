import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class QuanLyPhimService {
  constructor(private http: HttpClient) {}

  getListMovie(): Observable<any> {
    const url = `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`;
    return this.http.get(url).pipe(
      tap(() => {
        //splash
      }),
      catchError(err => {
        return this.handleError(err);
      })
    );
  }

  handleError(err) {
    switch (err.status) {
      case 500:
        alert(err.error);
        break;
      default:
        break;
    }

    return throwError(err);
  }
}
