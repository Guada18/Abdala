class Persona{
    constructor(nombre, fecha, dni, genero, peso, altura){
        this.nombre = nombre;
        this.fecha = fecha;
        this.dni = dni;
        this.genero = genero;
        this.peso = peso;
        this.altura = altura;
    }

    PesoIdeal(){
        const x = this.peso / (this.altura * this.altura);
        let cartel = 0;

        if(x < 20){
            cartel = 'La persona esta en menos de su peso ideal'; 
        }
        if(x > 19 && x < 26){
            cartel = 'La persona esta en su peso ideal';
        }
        if(x > 25){
            cartel = 'La persona tiene sobrepeso';   
        }
        return cartel;
    }
    Mayor(){
        
        let y = new Date();
        let f = new Date(this.fecha);
        let mayor = y.getFullYear() - f.getFullYear();
        let cartel;

        if(mayor >= 18){
            cartel = 'Es mayor de edad';
        }
        else{
            cartel = 'Es menor de edad';
        }

        return cartel;
    }

    
}

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const dni = document.getElementById('DNI').value;
    const genero = document.getElementById('genero').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    const persona = new Persona(nombre, fecha, dni, genero, peso, altura);

    const datos = document.getElementById('datos');
    const datos1 = document.getElementById('datos1');
    datos.innerHTML = persona.PesoIdeal();
    datos1.innerHTML = persona.Mayor();
}
);