/* PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

const parola = prompt('Inserisci una parola')

const checkPalindroma = isPalindroma(parola)

function isPalindroma(string){
    return string == string.split('').reverse().join('');
}

console.log(checkPalindroma)








