function print(input) {
    let newText = document.getElementById('replaceText');
    if (Palindromo(input) == true) {
        cartel = 'Es Palindromo';
    } if (Palindromo(input) == false) {
        cartel = 'No es Palindromo';
    }
    newText.innerHTML = cartel;
}

function Palindromo(text) {
    let procesado = text.split("").reverse().join("");
    let long = procesado.length;
    let flag = false;

    for (let i = 0; i < procesado.length / 2; i++) {
        if (procesado.charAt(i) == procesado.charAt(long - 1)) {
            long--;
            flag = true;
        }
    }
    return flag;
}