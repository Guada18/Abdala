function AnioNuevo(z) {
    let n = new Date(z.getFullYear(), 11, 31);
    let difTemp = n.getTime() - z.getTime();
    let diferencia = Math.ceil(difTemp / (1000 * 60 * 60 * 24));
    return diferencia;
}
  
function Mundial(z) {
    let mundial = new Date(2022, 11, 18);
    let difTemp = z.getTime() - mundial.getTime();
    let t = Math.floor(difTemp / (1000 * 60 * 60 * 24));
    return t;
}

function Anios(x, y) {
    let anios = y.getFullYear() - x.getFullYear();
    return 'Han transcurrido: ' + anios + ' años.';
}
  
function Laborable(z) {
    let d = z.getDay();
    if (d >= 1 && d <= 5) {
        return 'Es un día laborable.';
    } else {
        return 'No es un día laborable.';
    }
}