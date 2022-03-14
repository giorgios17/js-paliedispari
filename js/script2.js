/* PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const parola = prompt('Inserisci una parola');
console.log('La parola digitata è', parola);



function isPalindroma(stringToCheck){
    let parolaReverse= '';

    for(let i=stringToCheck.length -1; i >= 0; i--){
        parolaReverse += stringToCheck[i]
    }

   if(stringToCheck === parolaReverse){
       console.log('La parola digitata è palindroma')
   }
   else{
    console.log('La parola digitata NON è palindroma')
   }
}

isPalindroma(parola);








/* FUNZIONE CON REVERSE
function isPalindroma(string){
    return string == string.split('').reverse().join('');
}
*/ 

