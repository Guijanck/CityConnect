import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
];

@NgModule({

  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    LoginComponent
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
