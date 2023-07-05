class Empleado{
    constructor(nombre, anio, direccion, salario){
        this.nombre = nombre;
        this.anio = anio;
        this.direccion = direccion;
        this.salario = salario;
    }

    MostrarDatos(datos){
        return `Nombre: ${this.nombre}</br> 
        Año: ${this.anio}</br>
        Direccion: ${this.direccion}</br>
        Salario: ${this.salario}`;
        
    }
    Antiguedad(){
        return 2023 - this.anio;
    }

    Calle(){
        if(this.direccion == "Wall Street"){
            return "El empleado vive en la calle Wall Street"
        }
        else{
            return "El empleado no vive en la calle Wall Street"
        }
        
    }
}
document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const anio = document.getElementById('anoi').value;
    const direccion = document.getElementById('direccion').value;
    const salario = document.getElementById('salario').value;

    const empleado = new Empleado(nombre, anio, direccion, salario);

    const datos = document.getElementById('datos');
    const datos1 = document.getElementById('datos1');
    const datos2 = document.getElementById('datos2');
    datos.innerHTML = empleado.MostrarDatos();
    datos1.innerHTML = "La antiguedad del empleado son " + empleado.Antiguedad() + " años";
    datos2.innerHTML = empleado.Calle();
}
);