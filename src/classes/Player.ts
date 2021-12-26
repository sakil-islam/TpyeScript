export class Player {   // class ar property by default public
    name: string;  // access modifier use korle class baire theke access kora jabe na as like private name: string; private hole barie theke kisui kora jabe na.
    age: number;
    country: string; // readonly country : string --> readonly hobe read kora jabe but modify kora jabe na.
    constructor(n: string, a: number, c: string){
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play(){
        console.log(`${this.name} from ${this.country} is playing`);
    }
}