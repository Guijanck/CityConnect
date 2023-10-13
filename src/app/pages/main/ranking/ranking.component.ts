import { Component, OnInit } from '@angular/core';
import { RankingProxy } from 'src/app/models/proxys/ranking.proxy';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss'],
})
export class RankingComponent {

  //#region Public Properties

  public rankingList: RankingProxy[] = [
    {
      id: 1,
      name: 'Bruna Antunes Antunes Antunes Antunes Antunes Antunes Antunes Antunes Antunes Antunes Antunes Antunes',
      user: '@brunaantunessssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss',
      image: '',
      points: 694999999,
    },
    {
      id: 2,
      name: 'Mateus Dias',
      user: '@ma_teuz03',
      image: '',
      points: 572,
    },
    {
      id: 3,
      name: 'Lucas Laureano',
      user: '@lucaslaureano',
      image: '',
      points: 94,
    },
    {
      id: 4,
      name: 'Diego Isaquiel',
      user: '@diegojuanisaquiel',
      image: '',
      points: 16,
    },
    {
      id: 5,
      name: 'Guilherme Janczak',
      user: '@guijanck',
      image: '',
      points: 15,
    },
    {
      id: 6,
      name: 'Caique Mendes',
      user: '@caiquepinto',
      image: '',
      points: 8,
    },
    {
      id: 7,
      name: 'Gabriel Henrique',
      user: '@gabehenrique',
      image: '',
      points: 4,
    },
    {
      id: 8,
      name: 'Rodrigo Góes',
      user: '@rodrigogoes',
      image: '',
      points: 1,
    }
  ];

  //#endregion

}
