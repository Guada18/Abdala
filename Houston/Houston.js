function Vector(y, z) {
    var u = [];
    var suma = 0;
    
    for (var i = 0; i < y.length; i++) {
        var resultado = y[i] * z[i];
        u.push(resultado);
        suma += resultado;
    }
    
    return { u: u, suma: suma };
}

function Houston(y, z) {
    document.write('Primer vector = ');
    Mostrar(y);
    document.write('<br>');
    
    document.write('Segundo vector = ');
    Mostrar(z);
    document.write('<br>');
    
    var Houston = Vector(y, z);
    
    document.write('Multiplicacion: = ');
    Mostrar(Houston.u);
    document.write('<br>');
    
    document.write('Suma = ' + Houston.suma);
}

function Mostrar(vector) {
    for (var i = 0; i < vector.length; i++) {
        document.write(vector[i] + ' ');
    }
}