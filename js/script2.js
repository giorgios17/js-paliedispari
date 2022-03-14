/* PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const parola = prompt('Inserisci una parola');
const stringArray = parola.split('');
console.log(stringArray);

const stringArrayReverse = [];
for(let i=0; i < stringArray.length; i++){
    stringArrayReverse.unshift(stringArray[i]);
}
console.log(stringArrayReverse)


function isPalindroma(string1, string2){
   if(string1 == string2){
       console.log('La parola digitata è palindroma')
   }
   
}

const parolaCheck = isPalindroma(stringArray, stringArrayReverse);






/* FUNZIONE CON REVERSE
function isPalindroma(string){
    return string == string.split('').reverse().join('');
}
*/ 

