// función con nombre

function funcion1 (x: number, y: number): number {
    return x + y;
}

// función anonima

let funcion2 = function (x: number, y: number): number {
    return x + y;
}

//Arrow function

let funcion3 = (x: number, y: number): number => {
    return x + y;
}

//Función opcional
let funcionOpcional = (x: number, y?: number, z: number = 4): void => {
    console.log(x, z, y);
}

funcionOpcional(3);
