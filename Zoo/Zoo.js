class Zoo {
    constructor(Id, nombre, jaula, tipo, peso) {
        this.Id = Id;
        this.nombre = nombre;
        this.jaula = jaula;
        this.tipo = tipo;
        this.peso = peso;
    }

    get Id() {
        return this._Id;
    }
    set Id(newId) {
        this._id = newId;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(newnombre) {
        this._nombre = newnombre;
    }

    get jaula() {
        return this._jaula;
    }
    set jaula(newjaula) {
        this._jaula = newjaula;
    }

    get tipo() {
        return this._tipo;
    }
    set tipo(newtipo) {
        this._tipo = newtipo;
    }

    get peso() {
        return this._peso;
    }
    set peso(newpeso) {
        this._peso = newpeso;
    }
}

const animales = [];

const form = document.getElementById('formulario');
const Button = document.getElementById('submit');

const animalesContainer = document.getElementById('animalesContainer');
const datos = document.getElementById('datos');
const jaula5 = document.getElementById('jaula5');
const felinos = document.getElementById('felinos');
const jaula4 = document.getElementById('jaula4');

Button.addEventListener('click', (event) => {
    event.preventDefault();
    addAnimal();
});

jaula5.addEventListener('click', (event) => {
    event.preventDefault();

    const animalesJaula5 = animales.filter(animal => animal._jaula == 5);

    displayAnimales(animalesJaula5.filter(animal => animal._peso < 3))
});

felinos.addEventListener('click', (event) => {
    event.preventDefault();

    const felinos = animales.filter(animal => animal._jaula >= 2 && animal._jaula <= 5);

    displayAnimales(felinos.filter(animal => animal._tipo == 'felino'))
});

jaula4.addEventListener('click', (event) => {
    event.preventDefault();

    const jaula4 = animales.filter(animal => animal._jaula == 4);

    displayAnimales(jaula4.filter(animal => animal._peso <= 120))
});


function addAnimal() {
    const Id = document.getElementById('ID').value;
    const nombre = document.getElementById('nombre').value;
    const jaula = document.getElementById('jaula').value;
    const tipo = document.getElementById('tipo').value;
    const peso = document.getElementById('peso').value;

    const animal = new Zoo(Id, nombre, jaula, tipo, peso);
    animales.push(animal);

    displayAnimales(animales);
}

function displayAnimales(animales) {
    animalesContainer.innerHTML = '';

    animales.forEach(animal => {
        const animalDiv = document.createElement('div');
        animalDiv.innerText = `ID: ${animal._id}, Nombre: ${animal.nombre}, Jaula: ${animal.jaula}, Tipo: ${animal.tipo}. Peso: ${animal.peso}`;
        animalesContainer.appendChild(animalDiv);
    });
}
