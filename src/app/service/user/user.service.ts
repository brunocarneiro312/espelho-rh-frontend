import { Injectable } from '@angular/core';
import {User} from '../../model/user';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  onSave: Subject<User> = new Subject<User>();
  onUpdate: Subject<User> = new Subject<User>();
  onDelete: Subject<User> = new Subject<User>();
  onGet: Subject<User> = new Subject<User>();
  onList: Subject<Array<User>> = new Subject<Array<User>>();

  constructor(private http: HttpClient) {

  }

  save(user: User): Observable<User> {
    return this.http.post(environment.api.user.save, user)
      .pipe(map((u: User) => {
        const userSaved = new User();
        userSaved.name = u.name;
        userSaved.username = u.username;
        userSaved.password = u.password;
        this.onSave.next(userSaved);
        return userSaved;
      }));
  }

  update(user: User): void {
    try {
      this.onUpdate.next(user);
    }
    catch (err) {
      this.onUpdate.error('Erro ao atualizar usuário');
    }
  }

  delete(user: User): void {
    try {
      this.onDelete.next(user);
    }
    catch (err) {
      this.onDelete.error('Erro ao remover usuário');
    }
  }

  get(id: number): Observable<User> {
    return this.http.get(environment.api.user.findById.replace('{id}', id.toString()))
      .pipe(map((user: User) => {
        const userRecovered = new User();
        userRecovered.name = user.name;
        userRecovered.username = user.username;
        userRecovered.password = user.password;
        return userRecovered;
      }));
  }

  list(): Array<User> {
    try {
      this.onList.next(new Array<User>());
      return new Array<User>();
    }
    catch (err) {
      this.onList.error('Erro ao listar usuários');
    }
  }
}
