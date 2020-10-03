import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './auth.guard';
import {FuncionarioComponent} from './funcionario/funcionario.component';
import {EspelhoComponent} from './espelho/espelho.component';
import {NotificacaoComponent} from './notificacao/notificacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'funcionario', component: FuncionarioComponent, canActivate: [AuthGuard] },
  { path: 'funcionario/:id', component: FuncionarioComponent, canActivate: [AuthGuard] },
  { path: 'funcionario/:id/edit', component: FuncionarioComponent, canActivate: [AuthGuard] },
  { path: 'funcionario/:id/delete', component: FuncionarioComponent, canActivate: [AuthGuard] },
  { path: 'espelho', component: EspelhoComponent, canActivate: [AuthGuard] },
  { path: 'espelho/:id', component: EspelhoComponent, canActivate: [AuthGuard] },
  { path: 'espelho/:id/edit', component: EspelhoComponent, canActivate: [AuthGuard] },
  { path: 'espelho/:id/delete', component: EspelhoComponent, canActivate: [AuthGuard] },
  { path: 'notificacao', component: NotificacaoComponent, canActivate: [AuthGuard] },
  { path: 'notificacao/:id', component: NotificacaoComponent, canActivate: [AuthGuard] },
  { path: 'notificacao/:id/edit', component: NotificacaoComponent, canActivate: [AuthGuard] },
  { path: 'notificacao/:id/delete', component: NotificacaoComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
