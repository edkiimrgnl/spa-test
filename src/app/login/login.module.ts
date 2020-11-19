import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './shared/components/login/login.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    SigninPageComponent,
    SignupPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: LoginComponent, children: [
          {
            path: '', redirectTo: '/login', pathMatch: 'full'
          },
          {
            path: 'signin', component: SigninPageComponent 
          },
          {
            path: 'signup', component: SignupPageComponent 
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class LoginModule { }
