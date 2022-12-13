import { Component, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { Grupa } from '../model/grupa';
import { TipGrupe } from '../model/tip-grupe';

@Component({
  selector: 'app-grupe',
  templateUrl: './grupe.component.html',
  styleUrls: ['./grupe.component.css']
})
export class GrupeComponent implements OnInit {

  grupe : Array<Grupa> = [
    {
      imeGrupe : "Speak up",
      tipGrupe : TipGrupe.JASLICE,
      opis : 'Grupa namenjena najmladjim malisanima koji jos nisu progovorili. ',
      pocetakRada : new Date(),
      pocetakUpisa : new Date(),
      price : 50
    },
    {
      imeGrupe : "Juniors",
      tipGrupe : TipGrupe.JUNIOR,
      opis : 'Grupa namenjena malisanima od 2 do 3 godine. ',
      pocetakRada : new Date(),
      pocetakUpisa : new Date(),
      price : 70
    },
    
    {
      imeGrupe : "Seniori",
      tipGrupe : TipGrupe.PREDSKOLSKO,
      opis : 'Grupa namenjena . ',
      pocetakRada : new Date(),
      pocetakUpisa : new Date(),
      price : 90
    },
    
    {
      imeGrupe : "Maturanti",
      tipGrupe : TipGrupe.PREDSKOLSKO,
      opis : 'Grupa namenjena deci koja polaze u 1. razred. ',
      pocetakRada : new Date(),
      pocetakUpisa : new Date(),
      price : 100
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
