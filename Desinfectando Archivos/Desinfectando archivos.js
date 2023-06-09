function decifrar(palabra, infectado) {
    let replace = document.getElementById('texto');
    let nuevaPalabra = '';
    for (let i = 0; i < palabra.length; i++) {
        if (palabra.charAt(i) == infectado.charAt(1)) {
            if (palabra.charAt(i - 1) && palabra.charAt(i + 1) == infectado.charAt(0)) {
                nuevaPalabra = palabra.replace(infectado.charAt(1), '');
            }
        }
    }
console.log(nuevaPalabra)

    replace.innerHTML = nuevaPalabra;
}