class Hello {
    message: string;

    constructor(message: string) {
        this.message = message;
    }

    saludos() {
        return `Saludos ${this.message}`;
    }
}

let hola = new Hello("Typescript");
