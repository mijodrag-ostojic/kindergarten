import { Pol } from "./pol";

export class Osoba {

    ime: string;
    prezime: string;
    pol: Pol

    constructor(ime: string, prezime: string, pol: Pol) {
        this.ime = ime
        this.prezime = prezime
        this.pol = pol
    }

    funkcija() {
        if (this.pol === Pol.MALE) {
            console.log(
                this.ime.charAt(0) + " " +
                this.prezime.charAt(0));
        }
        else if (this.pol === Pol.FEMALE) {
            console.log(
                this.ime.toUpperCase()
            )
        }
        else {
            let rez = ''

            for (let i = 0; i < this.prezime.length; i++)   {
                let c = this.prezime.charAt(i)
                if (i % 2 == 0)
                    rez += c.toUpperCase()
                else
                    rez += c.toLowerCase()
            }

            let i = 0;
            while (i < this.prezime.length) {
                let c = this.prezime.charAt(i)
                if (i % 2 == 0)
                    rez += c.toUpperCase()
                else
                    rez += c.toLowerCase()
                i++
            }


            console.log(rez);
        }

       
    }


}
