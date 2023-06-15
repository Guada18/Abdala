function Hamming(x, y) {
    let z = 0
    let u = x.length;

    for(let v = 0; v < u; v++) {
        if(x.charAt(v) != y.charAt(v)) {
            z++;
        }
    }

    return z;
}