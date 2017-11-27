import { Observable } from 'Rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConnectionService {

  private restURL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }

  public getUsers(): Observable<Object> {
    return this._http.get(this.restURL);
  }
}
