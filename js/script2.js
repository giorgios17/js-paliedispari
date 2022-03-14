/* PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const parola = prompt('Inserisci una parola');
console.log(parola);

let parolaReverse= '';

for(let i=parola.length -1; i >= 0; i--){
    parolaReverse += parola[i]
}
console.log(parolaReverse);


function isPalindroma(string1, string2){
   if(string1 === string2){
       console.log('La parola digitata è palindroma')
   }
   else{
    console.log('La parola digitata NON è palindroma')
   }
}

isPalindroma(parola, parolaReverse);







/* FUNZIONE CON REVERSE
function isPalindroma(string){
    return string == string.split('').reverse().join('');
}
*/ 

