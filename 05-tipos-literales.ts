type color = "rojo" | "verde" | "azul";

const color: color = "rojo";

interface validSuccesfully {
    isValid: true;
    reason: null;
}

interface validFailed {
    isValid: false;
    reason: string;
}

type validResult = validSuccesfully | validFailed;

const resultado: validResult = {
    isValid: false,
    reason: 'Any error'
}

