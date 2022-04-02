//EJERCICIO 1 - hasId()
const personA = {
    name: "Pepe",
    surname: "Lopez",
    age: 12,
}; 

const personB = {
    id: 22,
    name: "Luca",
    surname: "Fernandez",
    age: 35,
};

const hasId = ({ id }) => id ? true : false;
console.log(hasId(personA));
console.log(hasId(personB));
console.log("===============");

//EJERCICIO 2 - head()
const cars = ["Opel", "Seat", "Citroen", "Volkswagen", "Ferrari", "Porche", "Tesla"];

const head = ([first]) => first;
console.log(head(cars));
console.log("===============");

//EJERCICIO 3 - tail()
const tail = ([, ...allExceptFirst]) => allExceptFirst;
console.log(tail(cars));
console.log("===============");

//EJERCICIO 4 - swapFirstToLast()
const swapFirstToLast = ([first, ...rest]) => [...rest, first];
console.log(swapFirstToLast(cars));
console.log(cars);
console.log("===============");

//EJERCICIO 5 - excludeId()
const excludeId = ({id, ...rest}) => rest;
console.log(excludeId(personA));
console.log(excludeId(personB));
console.log("===============");

//EJERCICIO 6 - wordsStartingWithA()
const wordsList = ["arbol", "azucar", "libro", "piedra", "años"];
const wordsStartingWithA = array => array.filter(word => word[0].toLowerCase() === "a");  
console.log(wordsStartingWithA(wordsList));
console.log("===============");

//EJERCICIO 7 - concat()
const concat = (...arg) => arg.join(" | ");
console.log(concat("str1", "str2", "str3", "str4"))
console.log("===============");

//EJERCICIO 8 - multArray()
const arrayNum = [1, 2, 3, 4, 5, 6];
const multArray = (arr, x) => arr.map(number => number * x);
console.log(multArray(arrayNum, 5));
console.log("===============");

//EJERCICIO 9 - calcMult()
const calcMult = (...numbers) => numbers.reduce((acc, number) => acc * number);
console.log(calcMult(1,2,3,4));
console.log("===============");

//EXTRA
//EJERCICIO 10 - swapFirstSecond()
const swapFirstSecond = ([first, second, ...rest]) => [second, first, ...rest];
console.log(swapFirstSecond(cars));
console.log(cars);
console.log("===============");

//EJERCICIO 11 - longest()
const longest = (char, ...str) => str.every((string) => string.startsWith(char));
console.log(longest("r", "rapido", "reloj", "ruido", "ritmo", "rueda"));
console.log(longest("e", "hola", "ola", "ruido", "dedo", "rueda"));
console.log("===============");

//EJERCICIO 12 - searchInStringV1()
 const str1 = "calculadora cientifica"
 const searchInStringV1 = (char,[...str]) => str.reduce((counter, character) => character === char ? ++counter : counter , 0)
 console.log(searchInStringV1("a", str1));
 console.log("===============");

//EJERCICIO 13 - searchInStringV2()
const searchInStringV2 = (char, [...str]) => str.filter(character => character === char).length;
console.log(searchInStringV2("a", str1));
console.log("===============");

//EJERCICIO 14 - sortCharacters
const sortCharacters = ([...str]) => str.sort();
console.log(sortCharacters(str1));
console.log("===============");

//EJERCICIO 15 - shout()
const shout = (...words) => words.join("! ").toUpperCase() + "!";
console.log(shout("hola","hello","hi", "bye"));
console.log("===============");

//EJERCICIO 16 - lista de la compra
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];


//Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
const addIVA = (iva, items) => items.map(item => ({...item, iva: iva}));
console.log(addIVA("21%", shoppingCart));
console.log("============");

//Ordena la lista de más a menos unidades.
const sortByUnits = items => items.sort((a, b) => (a.units > b.units) ? -1 : 1);
console.log(sortByUnits(shoppingCart));
console.log("============"); 

//Obtén el subtotal gastado en droguería
const subtotalDrugstore = items => items
    .filter(item => item.category === "Droguería")
    .reduce((subtotal, item) =>  subtotal + (item.price * item.units), 0);
console.log(subtotalDrugstore(shoppingCart));


