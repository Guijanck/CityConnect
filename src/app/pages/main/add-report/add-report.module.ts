import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddReportComponent } from './add-report.component';

const routes: Routes = [{ path: '', component: AddReportComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AddReportComponent
  ],
  declarations: [
    AddReportComponent,
  ]
})
export class AddReportModule { }
