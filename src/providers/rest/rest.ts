import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import { Injectable } from "@angular/core";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  private apiUrl = "http://upfvenniyur.atwebpages.com";

  constructor(public http: HttpClient) {
    console.log("Hello RestProvider Provider");
  }

  getCountries(): Observable<JSON> {
    return this.http
      .get(this.apiUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  login(data): Observable<string> {
    const requestOptions = {
      params: new HttpParams()
    };
    return this.http
      .post(this.apiUrl + "/login.php", data, requestOptions)
      .map(this.extractData)
      .catch(this.handleError);
  }

  register(data): Observable<string> {
    return this.http
      .post(this.apiUrl + "/register.php", data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  addEvent(data): Observable<string> {
    return this.http
      .post(this.apiUrl + "/add_event.php", data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getEvents(data): Observable<string> {
    return this.http
      .post(this.apiUrl + "/get_events.php", data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getHomeContent(data): Observable<string> {
    return this.http
      .post(this.apiUrl + "/home_details.php", data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getCommittee(data): Observable<string> {
    return this.http
      .post(this.apiUrl + "/get_committee.php", data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  toggleLike(data): Observable<string> {
    return this.http
      .post(this.apiUrl + "/likeEvent.php", data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || "";
      errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
