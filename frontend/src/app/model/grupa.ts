import { Time } from "@angular/common"
import { TipGrupe } from "./tip-grupe"

export interface Grupa  {
    imeGrupe : string
    tipGrupe : TipGrupe
    opis : string
    pocetakRada : Date
    pocetakUpisa : Date
    
}