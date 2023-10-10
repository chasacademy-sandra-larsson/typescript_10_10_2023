{

    // Type vs Interfaces

type Car = {
    color: string;
    model: string;
}

type SportsCar = Car & {speed: number}

type A = type B | type C;

interface Boat {
    color: string;
    model: string;
}

interface Ferry extends Boat {

}

interface Boat {

}

// Index signatures - objekt med dynamiska keys

interface myDictionary {
    [index: string]: string
}

const test: myDictionary = name["sandra"]


}