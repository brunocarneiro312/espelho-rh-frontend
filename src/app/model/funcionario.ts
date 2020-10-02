import {User} from './user';
import {Notificacao} from './notificacao';

export class Funcionario {

  private _id: number;
  private _nome: string;
  private _rg: string;
  private _user: User;
  private _notificacoes: Array<Notificacao> = new Array<Notificacao>();

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get rg(): string {
    return this._rg;
  }

  set rg(value: string) {
    this._rg = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get notificacoes(): Array<Notificacao> {
    return this._notificacoes;
  }

  set notificacoes(value: Array<Notificacao>) {
    this._notificacoes = value;
  }
}
