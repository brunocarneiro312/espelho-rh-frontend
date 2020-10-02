import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Funcionario} from '../../model/funcionario';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Espelho} from '../../model/espelho';

@Injectable({
  providedIn: 'root'
})
export class EspelhoService {

  onSave: Subject<Espelho> = new Subject<Espelho>();
  onUpdate: Subject<Espelho> = new Subject<Espelho>();
  onDelete: Subject<Espelho> = new Subject<Espelho>();
  onGet: Subject<Espelho> = new Subject<Espelho>();
  onList: Subject<Array<Espelho>> = new Subject<Array<Espelho>>();

  constructor(private http: HttpClient) {

  }

  save(espelho: Espelho): Observable<Espelho> {
    return this.http.post(environment.api.espelho.save, espelho)
      .pipe(map((e: Espelho) => {
        const espelhoSaved = new Espelho();
        e.id = e.id;
        espelhoSaved.anoMes = e.anoMes;
        e.uploadAt = e.uploadAt;
        e.espelho = e.espelho;
        this.onSave.next(espelhoSaved);
        return espelhoSaved;
      }));
  }

  update(espelho: Espelho): Observable<Espelho> {
    return this.http.put(environment.api.espelho.update, espelho)
      .pipe(map((e: Espelho) => {
        const espelhoUpdated = new Espelho();
        espelhoUpdated.id = e.id;
        espelhoUpdated.anoMes = e.anoMes;
        espelhoUpdated.uploadAt = e.uploadAt;
        espelhoUpdated.espelho = e.espelho;
        this.onSave.next(espelhoUpdated);
        return espelhoUpdated;
      }));
  }

  delete(id: number): Observable<Espelho> {
    return this.http.delete(environment.api.espelho.delete.replace('{id}', id.toString()))
      .pipe(map((e: Espelho) => {
        const espelhoDeleted = new Espelho();
        espelhoDeleted.id = e.id;
        espelhoDeleted.anoMes = e.anoMes;
        espelhoDeleted.uploadAt = e.uploadAt;
        this.onSave.next(espelhoDeleted);
        return espelhoDeleted;
      }));
  }

  get(id: number): Observable<Espelho> {
    return this.http.get(environment.api.espelho.findById.replace('{id}', id.toString()))
      .pipe(map((e: Espelho) => {
        const espelho = new Espelho();
        espelho.id = e.id;
        espelho.anoMes = e.anoMes;
        espelho.uploadAt = e.uploadAt;
        espelho.espelho = e.espelho;
        this.onSave.next(espelho);
        return espelho;
      }));
  }

  list(): Observable<Array<Espelho>> {
    return this.http.get(environment.api.espelho.findAll)
      .pipe(map((espelhos: Array<Espelho>) => {
        this.onList.next(espelhos);
        return espelhos;
      }));
  }
}
