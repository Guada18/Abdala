const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const replace = ["C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b"];

function ConvertirLetra(f, num) {
    let result;
    if (f == abc[num]) {
        result = replace[num];
    } if (f != abc[num]) {
        num++;
        result = ConvertirLetra(f, num);
    }
    return result;
}

function mostrar(z){
    let texto = document.getElementById('text');
    for(let i = 0; i < z.length; i++){
        texto.innerHTML += ConvertirLetra(z.charAt(i), 0);
    }
}