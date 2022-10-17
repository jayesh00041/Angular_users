import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any = [];
  maxId: number = 0;

  constructor(private http: HttpClient) {
    const URL = `https://reqres.in/api/users?page=1&per_page=12`;
    this.http.get(URL).subscribe((data: any) => {
        this.users = data.data;
        console.log('hello i am printing', this.users);
        this.users.forEach((user: any) => {
          this.maxId = Math.max(this.maxId, user.id);
        });
      },
      err => console.log(err));
  }
  getUsers(): any[] {
    return this.users;
  }

  getUser(id: number) {
    const URL = `https://reqres.in/api/users/${id}`;
    return this.http.get(URL);
  }

  addUser(data: any): void {
    this.maxId++;
    console.log(this.maxId);
    this.users.push({ ...data, ...{ id: this.maxId } })
    console.log(data);
  }

  updateUser(data: any): void {
    let idIndex: number=0;
    this.users.forEach((user:any, index:number)=>{
      if(user.id===data.id){
        idIndex=index;
      }
    })
    this.users[idIndex]=data;
  }
}
