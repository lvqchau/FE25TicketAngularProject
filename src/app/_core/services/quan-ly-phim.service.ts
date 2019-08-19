import { environment } from "./../../../environments/environment";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";

let urlApi = "";

@Injectable({
  providedIn: "root"
})
export class QuanLyPhimService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

  get(uri: string): Observable<any> {
    return this.http.get(urlApi + "/" + uri).pipe(
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
