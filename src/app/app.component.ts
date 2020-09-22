import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './service/auth/auth.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {

  title = 'auth-api-interface';

  onSignInSubscription: Subscription = new Subscription();
  onLogoutSubscription: Subscription = new Subscription();

  isUserLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) {

  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  // ---------
  // Listeners
  // ---------
  onSignInListener() {
    this.onSignInSubscription = this.authService.onSignIn
      .subscribe((token) => {
        this.isUserLoggedIn = token.jwt.length > 0;
      });
  }

  onLogoutListener() {
    this.onLogoutSubscription = this.authService.onLogout
      .subscribe(() => {
        this.isUserLoggedIn = false;
      })
  }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
    this.onSignInListener();
    this.onLogoutListener();
  }

  ngOnDestroy(): void {
    this.onSignInSubscription.unsubscribe();
  }

}
