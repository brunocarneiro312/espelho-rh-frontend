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

  private onSaveSubscription: Subscription;
  private onUpdateSubscription: Subscription;
  private onDeleteSubscription: Subscription;
  private onGetSubscription: Subscription;
  private onListSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService) {

  }

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
      .subscribe((user) => {
        console.log('user => ' + user.username);
        return user;
      }, error => {
        console.log(error.status);
      });
  }

  list(): Array<User> {
    return this.userService.list();
  }

  ngOnInit(): void {
    this.onSaveSubscription = new Subscription();
    this.onUpdateSubscription = new Subscription();
    this.onDeleteSubscription = new Subscription();
    this.onGetSubscription = new Subscription();
    this.onListSubscription = new Subscription();

    this.get(1);
  }

  ngOnDestroy(): void {
    this.onSaveSubscription.unsubscribe();
    this.onUpdateSubscription.unsubscribe();
    this.onDeleteSubscription.unsubscribe();
    this.onGetSubscription.unsubscribe();
    this.onListSubscription.unsubscribe();
  }

}
