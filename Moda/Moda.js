function numeroAleatorio() {
    return Math.floor(Math.random() * 10);
}

function Moda(x) {
    let y = new Array(2), z = 0, v = [], u;
    for (let h = 0; h < 2; h++) {
        y[h] = new Array(x).fill(0);
    }

    for (let i = 0; i < x; i++) {
        u = numeroAleatorio();
        y[0][i] = u;
        y[1][u]++;

        let j = i;
        while (j > 0 && y[0][j - 1] > u) {
            y[0][j] = y[0][j - 1];
            j--;
        }
        y[0][j] = u;

        if (y[1][u] > z) {
            z = y[1][u];
            v = [u];
        } else if (y[1][u] === z) {
            v.push(u);

        }
    }

    return y[0].join(', ') + '<br><br>Moda: ' + v.join(', ');
}