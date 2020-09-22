import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../service/auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit, OnDestroy {

  username: string;

  onSignInSubscription: Subscription;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.onSignInSubscription = this.authService.onSignIn
      .subscribe((data) => {

      });
  }

  ngOnDestroy(): void {
    this.onSignInSubscription.unsubscribe();
  }

}
