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
      imeGrupe : "Predškolci",
      tipGrupe : TipGrupe.PREDSKOLSKO,
      opis : 'Grupa namenjena deci od peti i po do šest i po godina. ',
      pocetakRada : new Date(),
      pocetakUpisa : new Date(),  
    },
    {
      imeGrupe : "Osnovci",
      tipGrupe : TipGrupe.OSNOVCI,
      opis : 'Grupa namenjena deci od I do IV razreda. ',
      pocetakRada : new Date(),
      pocetakUpisa : new Date(),
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
