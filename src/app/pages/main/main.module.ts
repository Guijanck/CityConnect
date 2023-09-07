import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';
import { FooterModule } from 'src/app/components/footer/footer.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [],
  },
];

@NgModule({
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    MainComponent
  ],
  declarations: [
    MainComponent
  ],
})
export class MainModule { }
