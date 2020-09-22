import {EventEmitter, Injectable} from '@angular/core';
import {User} from '../../model/user';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Signin} from '../../model/request/signin';
import {Token} from '../../model/response/token';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  onSignUp: Subject<User> = new Subject<User>();
  onSignIn: Subject<Token> = new Subject<Token>();
  onLogout: Subject<User> = new Subject<User>();

  constructor(private http: HttpClient) {

  }

  signUp(user: User): void {
    try {
      this.onSignUp.next(user);
    }
    catch (err) {
      this.onSignUp.error('Não foi possível realizar o cadastro.');
    }
  }

  signIn(user: Signin): void {
      this.http.post<Token>(environment.api.public.signin, user)
        .pipe(map((data: Token) => new Token(data['jwt'])))
        .subscribe((token) => this.onSignIn.next(token));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.onLogout.next();
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}
