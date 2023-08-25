/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/


//dichiaro la variabile

const rowEl = document.querySelector('.row');


//aggiungo i numeri da 1 a 100

for (let i = 1; i <= 100; i++) {

    let colorStyle;
    let boxContent;

    //controllo se i numeri sono sia multipli di 3 che di 5
    if (!(i % 3) && !(i % 5)) {

        colorStyle = 'bg-warning';
        console.log('FizzBuzz');
        boxContent = 'FizzBuzz';

    //controllo se sono multipli di tre   
    } else if (!(i % 3)) {

        colorStyle = 'bg-secondary';
        console.log('Fizz');
        boxContent = 'Fizz';

    //controllo se sono multipli di 5    
    } else if (!(i % 5)) {

        colorStyle = 'bg-success';
        console.log('Buzz');
        boxContent = 'Buzz';

    } else {
        
        colorStyle = 'bg-danger';
        console.log(i);
        boxContent = i;
        
    }

    //stampo in pagina il risultato

    rowEl.innerHTML += `<div class="square ${colorStyle}">${boxContent}</div>`;


 }