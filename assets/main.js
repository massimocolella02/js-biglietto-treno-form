function risultato(){
    //Variabili
    let name= document.querySelector('#nomePasseggero').value;
    let age=  document.querySelector('#etaPasseggero').value;
    let km= document.querySelector('#kilometri').value;
    const prezzokm= 0.21;


    //Stringhe comuni sul biglietto
    document.querySelector('#nomeBiglietto').innerHTML= name;
    document.querySelector('#codiceCP').innerHTML= Math.floor(Math.random() * 10000);
    document.querySelector('#carrozza').innerHTML= Math.floor(Math.random() * 15) + 1;

    //Costo biglietto
    let costo= km*prezzokm;

    if( age < 18 ) {
        costo*= 0.80
        document.querySelector('#costoBiglietto').innerHTML= costo.toFixed(2) + '€';
    } else if ( age > 65 ){
        costo*= 0.60
        document.querySelector('#costoBiglietto').innerHTML= costo.toFixed(2) + '€';
    }
    else{
        document.querySelector('#costoBiglietto').innerHTML= costo.toFixed(2) + '€';
    }

    //Display none e block
    document.querySelector('#biglietto').classList.add("d-block");
    document.querySelector('#biglietto').classList.remove("d-none");
}