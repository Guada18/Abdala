function Squash(y) {
    let tam = y.length, z = 0, u = 0;
    y = y.toUpperCase();

    for (let i = 0; i < tam; i++) {
        let aux = y.charAt(i);

        if (aux === 'F') {
            break;
        }

        switch (aux) {
            case 'A':
                z += 1;
                break;
            case 'B':
                u += 1;
                break;
        }
    }

    return z + ' - ' + u;
}