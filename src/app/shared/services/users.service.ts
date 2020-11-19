import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  headers = {
    ["Authorization"]: "Token 781bd9f1de084f4daa7ba2aa8a71a2eab855354e",
    ["X-CSRFToken"]: "tcTPQJvtb7kAIpqmTZL9hyY22lRkGBU1iysaV3dhi34yidEXmgUujy73NnIlLWJI"
  }

  getAll(): Observable<User[]> {
    return this.http.get(`http://emphasoft-test-assignment.herokuapp.com/api/v1/users/`, {headers: this.headers})
      .pipe(map((response: []) => {
        return response
      }))
  }

  // getById(id: string) {
  //   return this.http.get(`http://emphasoft-test-assignment.herokuapp.com/api/v1/users/${id}/`, {headers: this.headers})
  // }
}
