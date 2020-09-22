import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInFormComponent} from './sign-in-form/sign-in-form.component';
import {HomeComponent} from './home/home.component';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInFormComponent },
  { path: 'signup', component: SignUpFormComponent },
  { path: 'users', component: UserComponent },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
