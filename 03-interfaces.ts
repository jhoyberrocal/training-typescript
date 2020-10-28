interface Test {
    label: string;
    name?: string;
    readonly secret: number;
}

function printLabel(obj: Test) {
    if (obj.name) console.log('Contiene un name');
    console.log(obj);
}

const testObj: Test = {
    label: 'Prueba',
    name: 'Jhoy',
    secret: 3
};

// Error for readonly testObj.secret = 4;

printLabel(testObj);