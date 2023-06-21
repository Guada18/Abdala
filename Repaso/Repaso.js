function Repaso(x) {
    let cont = 0;

    while (x >= 1) {
        x = Math.floor(x / 10);
        cont++;
    }
  
    return cont;
}