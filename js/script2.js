/* PALIDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palidroma */

const parola = prompt('Inserisci una parola');
console.log(parola);

let parolaReverse= '';

for(let i=parola.length -1; i >= 0; i--){
    parolaReverse += parola[i]
}
console.log(parolaReverse);


function isPalidroma(string1, string2){
   if(string1 === string2){
       console.log('La parola digitata è palidroma')
   }
   else{
    console.log('La parola digitata NON è palidroma')
   }
}

isPalidroma(parola, parolaReverse);







/* FUNZIONE CON REVERSE
function isPalidroma(string){
    return string == string.split('').reverse().join('');
}
*/ 

