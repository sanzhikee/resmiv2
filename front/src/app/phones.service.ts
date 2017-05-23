import {Injectable} from '@angular/core';
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable, Subject} from "rxjs";

@Injectable()
export class PhonesService {

  headers = new Headers({'Content-Type': 'application/json'});
  api = "http://resmi.v2.dev/api.php/";
  phones = <any>[];

  private currentId = new Subject<any>();
  currentId$ = this.currentId.asObservable();

  constructor(private http: Http) {
  }

  onChangeCurrent(value) {
    this.currentId.next(value);
  }

  getPhones() {
    return this.http.get(this.api + "phones")
      .map(data => {
        console.log("I CAN SEE DATA HERE: ", data.json());
        return data.json();
      });
  }

  deletePhone(id) {
    return this.http.delete(this.api+"phones/"+id)
      .map(data => {
        console.log(data);
      })
      .catch(this.handleError);
  }

  updatePhone(id, name, phone){
    let body = {name, phone};
    return this.http.put(this.api+"phones/"+id, JSON.stringify(body), {headers: this.headers})
      .map(data => {
        console.log(data);
      })
      .catch(this.handleError);
  }

  savePhone(name, phone){
    let body = {name, phone};
    return this.http.post(this.api+"phones", JSON.stringify(body), {headers: this.headers})
      .map(data => {
        console.log(data);
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Произошла ошибка', error);
    return Promise.reject(error.message || error);
  }
}
