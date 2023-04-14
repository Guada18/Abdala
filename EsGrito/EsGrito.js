function EsGrito(text){
    let cartel;
    if(text.charAt(text.length-1) == '!'){
        cartel = 'Es Grito';
    }if(text.charAt(text.length-1) != '!'){
        cartel = 'Escrito';
    }
    document.write(cartel);
}