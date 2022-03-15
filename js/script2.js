/* PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const parola = prompt('Inserisci una parola');
console.log('La parola digitata è', parola);



function reverseWord(stringToReverse){
    let parolaReverse= '';

    for(let i=stringToReverse.length -1; i >= 0; i--){
        parolaReverse += stringToReverse[i]
    }

   return parolaReverse;
}

if(reverseWord(parola) === parola ){
    console.log('La parola digitata è palindroma')
}
else{
 console.log('La parola digitata NON è palindroma')
}









/* FUNZIONE CON REVERSE
function isPalindroma(string){
    return string == string.split('').reverse().join('');
}
*/ 

