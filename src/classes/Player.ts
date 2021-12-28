import { IsPlayer } from "../interfaces/isPlayer";

//interface public korte parbe readonly o korte parbe but private porte parbe na

export class Player implements IsPlayer {   // class ar property by default public
    public name: string;  // access modifier use korle class baire theke access kora jabe na as like private name: string; private hole barie theke kisui kora jabe na.
    private age: number;
    readonly country: string; // readonly country : string --> readonly hobe read kora jabe but modify kora jabe na.
    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }
    getProperty(){ // private ta avabe retun kore dilei hobe
        return this.age;
    }
    play(){
        console.log(`${this.name} from ${this.country} is playing`);
    }
}