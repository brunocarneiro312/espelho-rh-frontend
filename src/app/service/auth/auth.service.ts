import {Injectable} from '@angular/core';
import {User} from '../../model/user';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map} from 'rxjs/operators';
import {Signin} from '../../model/request/signin';
import {Token} from '../../model/response/token';

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
        .subscribe(
          (token) => {
            localStorage.setItem('token', token.jwt);
            this.onSignIn.next(token);
          },
          () => this.onSignIn.next(new Token(undefined)));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.onLogout.next();
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') != null;
  }
}
