class Animal {
    public name: string;
    private size: number;
    readonly t: number = 5;
    constructor(name: string, size: number) {
        this.name = name;
        this.size = size;
    }

    public isBig() {
        return this.size > 10;
    }
}

class Snake extends Animal {
    constructor(name: string, size: number) {
        super(name, size);
    }
}

let snake = new Snake("Serpiente", 11);

snake.isBig();
console.log(snake.t);