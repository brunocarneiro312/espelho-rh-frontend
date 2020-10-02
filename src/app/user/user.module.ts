import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AuthGuard} from '../auth.guard';

@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'users/:id', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'users/:id/edit', component: UserComponent, canActivate: [AuthGuard] },
      { path: 'users/:id/delete', component: UserComponent, canActivate: [AuthGuard] }
    ])
  ],
  exports: [
    UserComponent,
  ]
})
export class UserModule {
}
