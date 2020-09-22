import {Role} from './role';

export class User {

  private _id: number;
  private _name: string;
  private _username: string;
  private _password: string;
  private _roles: Array<Role> = new Array<Role>();
  private _enabled: boolean;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get roles(): Array<Role> {
    return this._roles;
  }

  set roles(value: Array<Role>) {
    this._roles = value;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }
}
