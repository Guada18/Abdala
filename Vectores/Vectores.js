function Vector(tam) {
    let v = [];
    for (let p = 0; p < tam; p++) {
        v.push(Math.floor(Math.random() * 32000));
    }
    return v;
}

function Promedio(v) {
    return v.reduce((a, b) => a + b, 0) / v.length;
}

function Mayor(v, promedio) {
    return v.filter((e) => e > promedio);
}

function Contar(v) {
    let c = 0;
    for (let indice = 0; indice < v.length; indice++) {
        if (v[indice] % 2 === 0 && v[indice] % 3 === 0) {
            c++;
        }
    }
    return c;
}

function Suma(v) {
    return v.reduce((a, b) => a + b, 0);
}

function Generar(v) {
    return v.map((e) => e * 2);
}