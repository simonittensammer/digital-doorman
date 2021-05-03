import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoormanService {

  SERVER_URL = 'http://10.0.0.170:8000/';

  constructor(
    private http: HttpClient
  ) {
  }

  openDoor(): Observable<string> {
    return this.http.get<string>(this.SERVER_URL + 'openDoor');
  }

  openGarage(): Observable<string> {
    return this.http.get<string>(this.SERVER_URL + 'openGarage');
  }
}
