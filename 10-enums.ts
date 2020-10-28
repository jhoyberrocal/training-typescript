enum Direccion {
    Arriba = 5,
    Abajo,
    Derecha,
    Izquierda
}

interface Bola {
    size: number,
    posicionInicial: Direccion
}

let bola:Bola = {
    size: 12,
    posicionInicial: Direccion.Abajo
}