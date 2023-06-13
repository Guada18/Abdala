function Mediana(y) {
    let x = y.length;
  
    for (let z = 0; z < x - 1; z++) {
      for (let j = 0; j < x - 1 - z; j++) {
        if (y[j] > y[j + 1]) {
          let aux = y[j];
          y[j] = y[j + 1];
          y[j + 1] = aux;
        }y
      }
    }
  
    let media;
    if (x % 2 === 0) {
      media = (y[x / 2 - 1] + y[x / 2]) / 2;
    } else {
      media = y[Math.floor(x / 2)];
    }
  
    return media * 2;
}