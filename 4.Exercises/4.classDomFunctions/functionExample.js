// trimitera unei liste (array) ca "argument" al functiei

function log(lista) { // -> "lista" este o variabila a functiei care poarta denumirea de "parametrul functiei" 
  for(let i=0; i < lista.length; i++) {
    console.log(lista[i]);
  }
}


const carList = ['Honda', 'BMW', 'Dacia'];
log(carList); // -> "carList" este valoarea pe care o trimitem functiei si poarta denumirea de "argumentul trimis functiei"

const carList2 = ['Honda1', 'BMW2', 'Dacia3'];
log(carList2);