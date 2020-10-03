import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {FuncionarioService} from '../service/funcionario/funcionario.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.scss']
})
export class NotificacaoComponent implements OnInit, OnDestroy {

  private onSaveSubscription: Subscription;
  private onUpdateSubscription: Subscription;
  private onDeleteSubscription: Subscription;
  private onGetSubscription: Subscription;
  private onListSubscription: Subscription;

  constructor(
    private router: Router,
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
