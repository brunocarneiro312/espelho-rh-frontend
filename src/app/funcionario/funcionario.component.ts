import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FuncionarioService} from '../service/funcionario/funcionario.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit, OnDestroy {

  @ViewChild('formCadastro') formCadastro;

  private onSaveSubscription: Subscription;
  private onUpdateSubscription: Subscription;
  private onDeleteSubscription: Subscription;
  private onGetSubscription: Subscription;
  private onListSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private funcionarioService: FuncionarioService) {

  }

  save(): void {

  }

  update(): void {

  }

  delete(): void {

  }

  get(id: number): void {

  }

  list(): void {

  }

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
