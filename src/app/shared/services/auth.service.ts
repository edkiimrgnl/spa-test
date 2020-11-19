import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Token, User } from 'src/app/shared/interfaces';
import { Observable, Subject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public error$: Subject<string> = new Subject<string>()
  
  constructor(private http: HttpClient) {}

  get token(): string {
    const tk = localStorage.getItem('test-token')

    return tk ? tk : null
  }

  signin(user: User): Observable<any> {
    return this.http.post('http://emphasoft-test-assignment.herokuapp.com/api-token-auth/', user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      )
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  signout() {
    this.setToken(null)
  }

  signup() {
    
  }

  private handleError(error: HttpErrorResponse) {
    const index = error.error.non_field_errors

    switch (index[0]) {
      case 'Unable to log in with provided credentials.':
        this.error$.next('Wrong username and/or password')
        break
    }

    return throwError(error)
  }

  private setToken(response: Token | null) {
    if(response) {
      localStorage.setItem('test-token', response.token)
    } else {
      localStorage.clear()
    }
  }

}
