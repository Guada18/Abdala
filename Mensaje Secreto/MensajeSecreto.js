function MensajeSecreto(x) {
    let newText = '';
    let palabra = '';
    let parentesis = '';
    for (let i = 0; i < x.length; i++) {
        if (x.charAt(i) == "(") {
            while (x[i] != ")") {
                palabra += x.charAt(i);
                i++;
            }
            parentesis = palabra.split("").reverse("").join("");
            newText += parentesis;
            parentesis = ''
            palabra = ''
        }
        newText += x.charAt(i)
    }
    return newText;
}