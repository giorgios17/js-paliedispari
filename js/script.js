/* PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */












/*PARI E DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */


function numeroRandomRange(min, max){
    const range = (max - min) + 1;
    const numeroRandom = Math.floor(Math.random()*range + min);
    return numeroRandom; 
}

const numeroBot = numeroRandomRange(1, 5);
console.log('Il numero del computer è', numeroBot);


const oddOrEvenUser = prompt('Scegli pari o dispari');
const numeroUtente = parseInt(prompt('Scegli un numero da 1 a 5'));

console.log('Hai scelto', oddOrEvenUser);
console.log('Hai scelto il numero', numeroUtente);

const somma = numeroUtente + numeroBot;

console.log(somma)

function oddOrEven(num){
    if(num % 2 === 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}