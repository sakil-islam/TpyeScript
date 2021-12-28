//interface public korte parbe readonly o korte parbe but private porte parbe na
export class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    getProperty() {
        return this.age;
    }
    play() {
        console.log(`${this.name} from ${this.country} is playing`);
    }
}
