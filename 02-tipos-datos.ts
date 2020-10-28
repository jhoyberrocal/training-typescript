// Booleanos validadores de verdad
let isdone: boolean = true;

// Númericos
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Texto
let fullname: string = 'Jhoy berrocal';
let age: number = 25;
let sentence: string = `My name is ${fullname}

I Have ${age} years old
`;

//Array
let list: Array<number> = [1, 2, 3];
let list2: number[] = [1, 2, 3];

// Tuple par de datos
let x: [string, number];

x = ["hello", 6];

// Enum
enum Color {
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;

enum Color2 {
    Red = 1,
    Green = 2,
    Blue = 4
}

let f: Color2 = Color2.Green;

//Desconocido
let notSure: unknown = 4;
notSure = 'Jhoy';

//Any
declare function getValue(key: string): any;
const strg: string = getValue('jhoy');

//Void
function warnUser() :void {
    console.log("this is a warning message");
}

//Null & Undefined
let u: undefined = undefined;
let n: null = null;

//Never
function error(message: string): never {
    throw new Error(message);
}

//Object
let o: object = {};

//Assertions
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
