import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RankingComponent } from './ranking.component';

const routes: Routes = [{ path: '', component: RankingComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RankingComponent
  ],
  declarations: [
    RankingComponent,
  ]
})
export class RankingModule { }
