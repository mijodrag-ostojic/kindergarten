export interface Account {
    ime : string
    prezime : string
    datumRodjenja : Date
    pol: string
    korisnickoIme : string
    email : string
    lozinka : string
    lozinka2 : string 
    cookies : Array<Cookie>
}

interface Cookie {
    name: string
    selected: boolean 
}