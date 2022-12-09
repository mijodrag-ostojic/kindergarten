import { Component, OnInit } from '@angular/core';
import { Osoba } from '../osoba';
import { Pol } from '../pol';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { 
    this.osoba()
  }

  ngOnInit(): void {
  }
  
  jeVeciOd3(x: number) : boolean {
    return x>3
  }

  nizPrvihN(n: number){
    let res: Array<number> = []
    
    for(let i = 1; i<=n; i++){
      res[i-1] = i;
    }
    return 8
  }
  
  osoba() {
    let marko = new Osoba('Marko', 'Markovic', Pol.OTHER)
    marko.funkcija()
  }

}
