import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http : HttpClient) { }
  getUser():Observable<any>{
    const URL = `https://reqres.in/api/users?page=1&per_page=12`;
    return this.http.get(URL);
  }
}
