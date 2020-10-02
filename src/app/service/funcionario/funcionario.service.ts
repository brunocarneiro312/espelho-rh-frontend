import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Funcionario} from '../../model/funcionario';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  onSave: Subject<Funcionario> = new Subject<Funcionario>();
  onUpdate: Subject<Funcionario> = new Subject<Funcionario>();
  onDelete: Subject<Funcionario> = new Subject<Funcionario>();
  onGet: Subject<Funcionario> = new Subject<Funcionario>();
  onList: Subject<Array<Funcionario>> = new Subject<Array<Funcionario>>();

  constructor(private http: HttpClient) {

  }

  save(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post(environment.api.funcionario.save, funcionario)
      .pipe(map((f: Funcionario) => {
        const funcionarioSaved = new Funcionario();
        funcionarioSaved.nome = f.nome;
        funcionarioSaved.rg = f.rg;
        funcionarioSaved.user = f.user;
        this.onSave.next(funcionarioSaved);
        return funcionarioSaved;
      }));
  }

  update(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put(environment.api.funcionario.update, funcionario)
      .pipe(map((f: Funcionario) => {
        const funcionarioUpdated = new Funcionario();
        funcionarioUpdated.nome = f.nome;
        funcionarioUpdated.rg = f.rg;
        funcionarioUpdated.user = f.user;
        this.onSave.next(funcionarioUpdated);
        return funcionarioUpdated;
      }));
  }

  delete(id: number): Observable<Funcionario> {
    return this.http.delete(environment.api.funcionario.delete.replace('{id}', id.toString()))
      .pipe(map((f: Funcionario) => {
        const funcionarioDeleted = new Funcionario();
        funcionarioDeleted.nome = f.nome;
        funcionarioDeleted.rg = f.rg;
        funcionarioDeleted.user = f.user;
        this.onSave.next(funcionarioDeleted);
        return funcionarioDeleted;
      }));
  }

  get(id: number): Observable<Funcionario> {
    return this.http.get(environment.api.funcionario.findById.replace('{id}', id.toString()))
      .pipe(map((f: Funcionario) => {
        const funcionario = new Funcionario();
        funcionario.nome = f.nome;
        funcionario.rg = f.rg;
        funcionario.user = f.user;
        this.onSave.next(funcionario);
        return funcionario;
      }));
  }

  list(): Observable<Array<Funcionario>> {
    return this.http.get(environment.api.funcionario.findAll)
      .pipe(map((funcionarios: Array<Funcionario>) => {
        this.onList.next(funcionarios);
        return funcionarios;
      }));
  }
}
