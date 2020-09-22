import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {User} from '../model/user';
import {Subject, Subscription} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Signin} from '../model/request/signin';
import {Token} from '../model/response/token';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit, OnDestroy {

  // Formulário de autenticação
  formSignIn: FormGroup;

  // Subscriptions
  onSignInSubscription: Subscription;

  showPassword: boolean;

  constructor(private authService: AuthService, private router: Router) {

  }

  /**
   * ----------------------------------
   * Submete requisição de autenticação
   * ----------------------------------
   */
  signIn(): void {

    const signin = new Signin(
      this.formSignIn.controls['username'].value,
      this.formSignIn.controls['password'].value);

    this.authService.signIn(new Signin(signin.username, signin.password));
  }

  /**
   * ----------------------------------
   * Obtém o formulário de autenticação
   * ----------------------------------
   */
  getFormSignIn(): FormGroup {
    return new FormGroup({
      "username": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required])
    })
  }

  // ---------
  // Listeners
  // ---------
  onSignIn() {
    this.onSignInSubscription = this.authService.onSignIn.subscribe((token) => {
      localStorage.setItem('token', JSON.stringify(token));
      this.router.navigate(['/']);
    });
  }

  // -----------------------
  // Lifecycle hooks methods
  // -----------------------

  ngOnInit(): void {
    this.showPassword = false;
    this.formSignIn = this.getFormSignIn();
    this.onSignIn();
  }

  ngOnDestroy(): void {
    this.onSignInSubscription.unsubscribe();
  }

}
