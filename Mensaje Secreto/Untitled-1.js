console.log(decodificar("Hoy (.sh 22 sal a) (ed asac ne sominuer son) Marcelo."));
//output: Hoy a las 22 hs. nos reunimos en casa de Marcelo.

function decodificar(text){
	let newString = "";

	for(let i = 0; i < text.length; i++){
		if(text[i] == "("){
			let k = i+1;
			let stringReverted = "";
			while(true){
				if(text[k] == ")"){
					newString += stringReverted.split("").reverse().join("");
					++k;
					break;
				}
				stringReverted += text[k];
				++k;
			}
			i = k;
		}
		newString += text[i];
	}

	return newString;
}