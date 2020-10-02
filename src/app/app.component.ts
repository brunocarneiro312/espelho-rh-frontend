import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from './service/auth/auth.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy  {

  title = 'auth-api-interface';

  onSignInSubscription: Subscription;
  onLogoutSubscription: Subscription;

  isUserLoggedIn: boolean;
  isModalOpened: boolean;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  confirmLogout() {
    this.isModalOpened = true;
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
        this.isUserLoggedIn = token.jwt && token.jwt.length > 0;
      });
  }

  onAnswer(data) {
    this.isModalOpened = false;
    if (data) {
      this.logout();
    }
  }

  onLogoutListener() {
    this.onLogoutSubscription = this.authService.onLogout
      .subscribe(() => {
        this.isUserLoggedIn = false;
      })
  }

  // ---------------
  // Lifecycle hooks
  // ---------------
  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.isUserLoggedIn();
    this.onSignInListener();
    this.onLogoutListener();
  }

  ngOnDestroy(): void {
    this.onSignInSubscription.unsubscribe();
  }
}
