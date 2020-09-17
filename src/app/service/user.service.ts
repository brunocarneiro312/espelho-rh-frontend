import { Injectable } from '@angular/core';
import {User} from '../model/user';
import { environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {

  }

  save(user: User): User {
    console.log(user);
    return user;
  }

  update(user: User): User {
    return null;
  }

  delete(userId: number): User {
    return null;
  }

  findAll(): User[] {
    return [];
  }

  findById(userId: number): User {
    return null;
  }

}
