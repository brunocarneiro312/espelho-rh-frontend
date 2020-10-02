import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../service/user/user.service';
import {Subscription} from 'rxjs';
import {User} from '../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  /**
   * Subscriptions
   */
  private onSaveSubscription: Subscription;
  private onUpdateSubscription: Subscription;
  private onDeleteSubscription: Subscription;
  private onGetSubscription: Subscription;
  private onListSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private userService: UserService) {

  }

  /**
   * CRUD
   */
  save(): void {
    this.userService.save(new User())
      .subscribe(
        (user) => console.log(user.username),
        (error) => console.log(error));
  }

  update(): void {
    this.userService.update(new User());
  }

  delete(): void {
    this.userService.delete(new User());
  }

  get(id: number): void {
    this.userService.get(id)
      .subscribe(
        (user) => user,
        (error) => console.log(error.status));
  }

  list(): Array<User> {
    return this.userService.list();
  }

  /**
   * Lifecycle Hooks
   */
  ngOnInit(): void {
    this.onSaveSubscription = new Subscription();
    this.onUpdateSubscription = new Subscription();
    this.onDeleteSubscription = new Subscription();
    this.onGetSubscription = new Subscription();
    this.onListSubscription = new Subscription();
  }

  ngOnDestroy(): void {
    this.onSaveSubscription.unsubscribe();
    this.onUpdateSubscription.unsubscribe();
    this.onDeleteSubscription.unsubscribe();
    this.onGetSubscription.unsubscribe();
    this.onListSubscription.unsubscribe();
  }

}
