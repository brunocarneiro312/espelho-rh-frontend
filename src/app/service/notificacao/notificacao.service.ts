import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Espelho} from '../../model/espelho';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Notificacao} from '../../model/notificacao';

@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

  onSave: Subject<Notificacao> = new Subject<Notificacao>();
  onUpdate: Subject<Notificacao> = new Subject<Notificacao>();
  onDelete: Subject<Notificacao> = new Subject<Notificacao>();
  onGet: Subject<Notificacao> = new Subject<Notificacao>();
  onList: Subject<Array<Notificacao>> = new Subject<Array<Notificacao>>();

  constructor(private http: HttpClient) {

  }

  save(espelho: Notificacao): Observable<Notificacao> {
    return this.http.post(environment.api.notificacao.save, espelho)
      .pipe(map((n: Notificacao) => {
        const notificacaoSaved = new Notificacao();
        notificacaoSaved.id = n.id;
        notificacaoSaved.text = n.text;
        notificacaoSaved.dataInicio = n.dataInicio;
        notificacaoSaved.dataFim = n.dataFim;
        this.onSave.next(notificacaoSaved);
        return notificacaoSaved;
      }));
  }

  update(espelho: Notificacao): Observable<Notificacao> {
    return this.http.put(environment.api.notificacao.update, espelho)
      .pipe(map((n: Notificacao) => {
        const notificacaoUpdated = new Notificacao();
        notificacaoUpdated.id = n.id;
        notificacaoUpdated.text = n.text;
        notificacaoUpdated.dataInicio = n.dataInicio;
        notificacaoUpdated.dataFim = n.dataFim;
        this.onSave.next(notificacaoUpdated);
        return notificacaoUpdated;
      }));
  }

  delete(id: number): Observable<Notificacao> {
    return this.http.delete(environment.api.notificacao.delete.replace('{id}', id.toString()))
      .pipe(map((n: Notificacao) => {
        const notificacaoDeleted = new Notificacao();
        notificacaoDeleted.id = n.id;
        notificacaoDeleted.text = n.text;
        notificacaoDeleted.dataInicio = n.dataInicio;
        notificacaoDeleted.dataFim = n.dataFim;
        this.onSave.next(notificacaoDeleted);
        return notificacaoDeleted;
      }));
  }

  get(id: number): Observable<Notificacao> {
    return this.http.get(environment.api.notificacao.findById.replace('{id}', id.toString()))
      .pipe(map((n: Notificacao) => {
        const notificacao = new Notificacao();
        notificacao.id = n.id;
        notificacao.text = n.text;
        notificacao.dataInicio = n.dataInicio;
        notificacao.dataFim = n.dataFim;
        this.onSave.next(notificacao);
        return notificacao;
      }));
  }

  list(): Observable<Array<Notificacao>> {
    return this.http.get(environment.api.notificacao.findAll)
      .pipe(map((notificacoes: Array<Notificacao>) => {
        this.onList.next(notificacoes);
        return notificacoes;
      }));
  }
}
