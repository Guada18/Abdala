function ContarMultiplosDe2(x) {
    let date = false
    if ((x % 2) == 0) {
        date = true;
    }
    return date;
}

function ContarMultiplosDe3(x) {
    let date = false
    if ((x % 3) == 0) {
        date = true;
    }
    return date;
}

function ContarMultiplosDe4(x) {
    let date = false
    if ((x % 4) == 0) {
        date = true;
    }
    return date;
}

function ContarMultiplosDe5(x) {
    let date = false
    if ((x % 5) == 0) {
        date = true;
    }
    return date;
}

function DetectarMultiplos(arr, amount, n) {

    for( i = 0; i<n; i++ ){
        if(ContarMultiplosDe2(arr[i]) == true){
            amount[0]++;
        }
        if(ContarMultiplosDe3(arr[i]) == true){
            amount[1]++;
        }
        if(ContarMultiplosDe4(arr[i]) == true){
            amount[2]++;
        }
        if(ContarMultiplosDe5(arr[i]) == true){
            amount[3]++;
        }
    }
    
    return amount;
}

function print(amount, arr, n) {
    document.write('<table ><tr style="border: 1px solid black><td><p>Entrada</p></td><td><p>Salida</p></td></tr>');
    document.write('<tr><td><p ;">' + n + '</p></br><p style="border: 1px solid black;">');
    for (i = 0; i < n; i++) {
        document.write(' ' + arr[i] + ' ');
    }
    document.write('</p></td><td>');
    for (i = 2; i <= 5; i++) {
        document.write('<p>'+ amount[i - 2] +' Multiplos de ' + i + '</p>');
    }
    document.write('</td></tr></table>');
}