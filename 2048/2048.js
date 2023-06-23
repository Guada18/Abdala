document.addEventListener('DOMContentLoaded', function (event) {
    vaciarCeldas(); // Llamada a la función para vaciar las celdas
    seleccionarCelda();

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            moverCeldas(event.key);
            comprobarEstadoJuego();
        }
    });
});

function victoria() {
    const c = document.getElementsByClassName('cell');

    for (let i = 0; i < c.length; i++) {
        if (c[i].textContent.trim() === '2048') {
            return '¡Felicidades! ¡Has ganado!';
        }
    }

    return null;
}

function gameOver(posicionInicial) {
    const p = posicionInicial;
    const c = document.getElementsByClassName('cell');

    // Comprobar si todas las celdas están llenas
    let todasLlenas = true;
    for (let i = 0; i < c.length; i++) {
        if (c[i].innerText.trim() === '') {
            todasLlenas = false;
            break;
        }
    }

    if (todasLlenas) {
        // Comprobar si se puede hacer algún movimiento
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if ((j < 3 && p[i][j] === p[i][j + 1]) || (i < 3 && p[i][j] === p[i + 1][j])) {
                    return null; // Aún se pueden hacer movimientos
                }
            }
        }

        return '¡GAME OVER!';
    }

    return null;
}

function comprobarEstadoJuego() {
    const v = victoria();

    if (v) {
        alert(v);
        // Realizar acciones para victoria
    } else {
        const p = mPosicionC();
        const GO = gameOver(p);

        if (GO) {
            alert(GO);
        } else {
            seleccionarCelda();
        }
    }
}

function valorAleatorio() {
    const val = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048];
    const pro = [0.4, 0.3, 0.2, 0.05, 0.02, 0.01, 0.01, 0.005, 0.002, 0.001, 0.001];

    let totalPesos = pro.reduce((sum, peso) => sum + peso, 0);
    let valorAleatorio = Math.random() * totalPesos;

    for (let i = 0; i < val.length; i++) {
        valorAleatorio -= pro[i];
        if (valorAleatorio <= 0) {
            return val[i];
        }
    }

    return null;
}

function vaciarCeldas() {
    const c = document.querySelectorAll('.cell p');

    c.forEach((celda) => {
        celda.innerText = '';
        celda.removeAttribute('id-lleno');
    });
}

function matrizIds() {
    const c = {};

    for (let fila = 1; fila <= 4; fila++) {
        for (let columna = 1; columna <= 4; columna++) {
            const id = `c${(fila - 1) * 4 + columna}`;
            c[id] = { fila, columna };
        }
    }

    return c;
}

function seleccionarCelda() {
    const c = matrizIds(); // Obtener la matriz de IDs de celdas
    const id = Object.keys(c);
    const indice = Math.floor(Math.random() * id.length);
    const celdaAleatoria = id[indice];

    const valorCelda = valorAleatorio();

    const celdaSeleccionada = document.getElementById(celdaAleatoria);
    const textoCelda = document.createElement('p');
    textoCelda.style.fontSize = '240%'; // Establecer el tamaño de fuente
    textoCelda.innerText = valorCelda;
    celdaSeleccionada.innerHTML = '';
    celdaSeleccionada.appendChild(textoCelda);
    celdaSeleccionada.setAttribute('id-lleno', '');

    return celdaAleatoria;
}

function mPosicionC() {
    const p = [];

    for (let i = 0; i < 4; i++) {
        p[i] = [
            document.getElementById(`c${i * 4 + 1}`).innerText.trim(),
            document.getElementById(`c${i * 4 + 2}`).innerText.trim(),
            document.getElementById(`c${i * 4 + 3}`).innerText.trim(),
            document.getElementById(`c${i * 4 + 4}`).innerText.trim(),
        ];
    }

    return p;
}

function actualizarCeldas(p) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const celda = document.getElementById(`c${i * 4 + j + 1}`);
            const textoCelda = document.createElement('p');
            textoCelda.style.fontSize = '240%'; // Establecer el tamaño de fuente
            textoCelda.innerText = p[i][j];
            celda.innerHTML = '';
            celda.appendChild(textoCelda);
        }
    }

    seleccionarCelda();
}
function seleccionarCelda() {
    const c = matrizIds(); // Obtener la matriz de IDs de celdas
    const id = Object.keys(c);
    const indice = Math.floor(Math.random() * id.length);
    const celdaAleatoria = id[indice];

    const valorCelda = valorAleatorio();

    const celdaSeleccionada = document.getElementById(celdaAleatoria);

    // Verificar si la celda está vacía antes de asignar el valor
    if (celdaSeleccionada.innerText.trim() === '') {
        const textoCelda = document.createElement('p');
        textoCelda.style.fontSize = '240%';
        textoCelda.innerText = valorCelda;
        celdaSeleccionada.innerHTML = '';
        celdaSeleccionada.appendChild(textoCelda);
        celdaSeleccionada.setAttribute('id-lleno', '');
    }

    return celdaAleatoria;
}

function moverCeldas(tipe) {
    const p = mPosicionC();

    switch (tipe) {
        case 'ArrowUp':
            for (let y = 0; y < 4; y++) {
                for (let g = 0; g < 4; g++) {
                    for (let b = 3; b > 0; b--) {
                        if (p[b][g] !== '' && p[b - 1][g] === '') {
                            // Realizar intercambio
                            const temp = p[b][g];
                            p[b][g] = '';
                            p[b - 1][g] = temp;
                        } else if (p[b][g] !== '' && p[b][g] === p[b - 1][g]) {
                            // Sumar valores
                            const suma = parseInt(p[b][g]) + parseInt(p[b - 1][g]);
                            p[b][g] = suma.toString();
                            p[b - 1][g] = '';
                        }
                    }
                }
            }
            break;
        case 'ArrowDown':
            for (let y = 0; y < 4; y++) {
                for (let g = 0; g < 4; g++) {
                    for (let b = 0; b < 3; b++) {
                        if (p[b][g] !== '' && p[b + 1][g] === '') {
                            // Realizar intercambio
                            const temp = p[b][g];
                            p[b][g] = '';
                            p[b + 1][g] = temp;
                        } else if (p[b][g] !== '' && p[b][g] === p[b + 1][g]) {
                            // Sumar valores
                            const suma = parseInt(p[b][g]) + parseInt(p[b + 1][g]);
                            p[b][g] = suma.toString();
                            p[b + 1][g] = '';
                        }
                    }
                }
            }
            break;
        case 'ArrowRight':
            for (let y = 0; y < 4; y++) {
                for (let b = 0; b < 4; b++) {
                    for (let g = 0; g < 3; g++) {
                        if (p[b][g] !== '' && p[b][g + 1] === '') {
                            // Realizar intercambio
                            const temp = p[b][g];
                            p[b][g] = '';
                            p[b][g + 1] = temp;
                        } else if (p[b][g] !== '' && p[b][g] === p[b][g + 1]) {
                            // Sumar valores
                            const suma = parseInt(p[b][g]) + parseInt(p[b][g + 1]);
                            p[b][g] = suma.toString();
                            p[b][g + 1] = '';
                        }
                    }
                }
            }
            break;
        case 'ArrowLeft':
            for (let y = 0; y < 4; y++) {
                for (let b = 0; b < 4; b++) {
                    for (let g = 3; g > 0; g--) {
                        if (p[b][g] !== '' && p[b][g - 1] === '') {
                            // Realizar intercambio
                            const temp = p[b][g];
                            p[b][g] = '';
                            p[b][g - 1] = temp;
                        } else if (p[b][g] !== '' && p[b][g] === p[b][g - 1]) {
                            // Sumar valores
                            const suma = parseInt(p[b][g]) + parseInt(p[b][g - 1]);
                            p[b][g] = suma.toString();
                            p[b][g - 1] = '';
                        }
                    }
                }
            }
            break;
    }

    actualizarCeldas(p);
}