import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInFormComponent} from './sign-in-form/sign-in-form.component';
import {SignUpFormComponent} from './sign-up-form/sign-up-form.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    SignInFormComponent,
    SignUpFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'signin', component: SignInFormComponent },
      { path: 'signup', component: SignUpFormComponent },
    ])
  ],
  exports: [
    SignInFormComponent,
    SignUpFormComponent,
    RouterModule
  ]
})
export class AuthModule { }
