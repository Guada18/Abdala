class Password{
    constructor(contrasena, longitud){
        this.contrasena = contrasena;
        this.longitud = longitud;
    }
    Fuerte(){
        let y = 0;
        let z = 0;
        let v = 0;
        for(let i = 0; i < this.contrasena.lenght; i++) {
            let caracter;
            caracter  = this.contrasena[i];
        }
        if(/[A-Z]/.test(caracter)){
            y++;
        }
        if(/[a-z]/.test(caracter)){
            z++;
        }
        if(/[0-9]/.test(caracter)){
            v++;
        }
        if(y >= 2 && z >= 1 && v >= 5){
            return true;
        }
        else{
            return false;
        }
    }
}

document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault();

    const contrasena = document.getElementById('contrasena').value;

    const contra = new Password(contrasena);

    const datos = document.getElementById('datos');
    datos.innerHTML = contra.Fuerte();
}
);