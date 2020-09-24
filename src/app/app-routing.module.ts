import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInFormComponent} from './sign-in-form/sign-in-form.component';
import {HomeComponent} from './home/home.component';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SignInFormComponent },
  { path: 'signup', component: SignUpFormComponent },
  { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
