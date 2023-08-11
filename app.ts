class Greeter{
    greet:string;

    constructor(parameter : string){
        this.greet=parameter;
    }

    greetings(): string
    {
        return this.greet
    }


}
let age : number = 54;
// age="sdfsd"; // error TS2322: Type 'string' is not assignable to type 'number'

const greeter=new Greeter("heela, there");
function double (num : number) : number {
    return num*2;
}

let myFavouritePet : "Jo Jo";
myFavouritePet="Jo Jo";

// type aliases and Union types
type Species = "Cat" | "Dog" | "Horse";


function buyPet(name : Species ): string {
    return name;
}

console.log(buyPet("Horse"))
console.log(myFavouritePet);
console.log(greeter.greetings().slice(3,8));
console.log(greeter);
