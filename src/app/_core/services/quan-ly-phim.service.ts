import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable, throwError, BehaviorSubject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, catchError, delay } from "rxjs/operators";

let urlApi = "";

@Injectable({
  providedIn: "root"
})
export class QuanLyPhimService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }
  public showSpinner = new BehaviorSubject<boolean>(false);
  public spinned = this.showSpinner.asObservable();
  public downloadURL = new BehaviorSubject<string>(
    "http://via.placeholder.com/350x150"
  );
  public maNhom = new BehaviorSubject<string>("GP06");

  getImg(img: string) {
    this.downloadURL.next(img);
  }

  openSpinner(spinner: boolean) {
    this.showSpinner.next(spinner);
  }

  get(uri: string): Observable<any> {
    this.openSpinner(true);
    return this.http.get(urlApi + "/" + uri).pipe(
      tap(() => {}),
      catchError(err => {
        return this.handleError(err);
      }),
      tap(() => {
        this.openSpinner(false);
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
