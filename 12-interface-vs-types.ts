interface Animal {
    name: string
}

interface Animal {
    size: number
}

interface Tiger extends Animal {
    gender: string
}

type Animal2 = {
    name: string
}

type Tiger2 = Animal2 & {
    gender: string
}

