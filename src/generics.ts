
// Generisk funktion  med en generiskt parameter

function convertToArray<T>(input: T): T[] {
    return [input]
}

convertToArray("hello");
convertToArray(1000)
convertToArray(true)
convertToArray(null)


function getIndexOfArrayItem<T>(arr: T[], arrItem: T): number {
    return arr.findIndex(item => item === arrItem);
}

const arr_test = [1, 2, 3, 4, 5];
console.log(getIndexOfArrayItem(arr_test, 3))


// Generiska funktion med två generiska parametrar

function createArrayPair<T, K>(a: T, b: K): [T,K] {
    return [a, b];
}

createArrayPair(1, "a")
createArrayPair("a", 1)


// Interface med generisk typ

interface Burger<T> {
    size: T
    price: number
}

const meal: Burger<string> = {
    size: "small",
    price: 50
}

// Skapa ett generiskt interface för en lista av objekt

interface List<T> {
    items: T[]
    addItem: (item: T) => void
    removeItem: (item: T) => void
}

const users: List<string> = {
    items: ["John", "Jane"],
    addItem(item: string) {
        this.items.push(item)
    },
    removeItem(item: string) {
        this.items = this.items.filter(i => i !== item)
    }
}

const products: List<number> = {
    items: [131, 131],
    addItem(item: number) {
        this.items.push(item)
    },
    removeItem(item: number) {
        this.items = this.items.filter(i => i !== item)
    }
}

users.addItem("Sandra")
console.log(users)


const arr: string[] = ["a", "b"]
const arr2: Array<string> = ["c", "d"]


// Använda extends begränsar typer
function convertToArray<T extends number | string>(input: T): T[] {
    return [input]
}

convertToArray("hello");
convertToArray(1000)
convertToArray(true)
convertToArray(null)