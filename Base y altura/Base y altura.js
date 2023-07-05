class Rectangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    CalcularArea(area) {
        return this.base * this.altura;
    }
}

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    const base = document.getElementById('base').value;
    const altura = document.getElementById('altura').value;

    const rectangulo = new Rectangulo(base, altura);

    const area = document.getElementById('area');
    area.innerHTML = "El area del rectangulo es " + rectangulo.CalcularArea();
}
);