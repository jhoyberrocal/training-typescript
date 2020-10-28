type Person = {
    firstName: string,
    lastName?: string
}

type Client = {
    clientNumber: number
}

type NewClient = Person & Client;

let x: NewClient;
x.clientNumber = 1;
x.firstName = 'Jhoy';

console.log(x);