/*let cont = 10;
console.log(cont);
cont--;
console.log(cont);
cont--;
console.log(cont);

//buccles

for (let i = 1; i<= 7*3 ; i++){
    if (i == 6 || i == 7){
        continue;
    }
    console.log(`Hoy es el dia ${i} y se trabaja`);
}*/

//chofer de colectivo, 10 personas
//parada 1 se bajan 2 personas
//parada 2 se bajan 3 personas
//parada 3 se bajan 5
/*
let pasajeros = 10;
let primerParada = 8 
let segundaParada = 5
let tecerParada = 0

for (let i = pasajeros; i >= 0; i--){
    console.log(i)
    if(i == primerParada){
        console.log(`Primera parada se bajan ${2}, quedan ${(pasajeros-=2)}`);
    }
    else if (i == segundaParada){
        console.log(`Segunda parada se bajan ${3},quedan ${(pasajeros -= 3)}`)
    }
    else if (i == tecerParada){
        console.log(`Segunda parada se bajan ${5},quedan ${(pasajeros -= 5)}`)
    }
}*/

/*
let pasajeros = 10;
let primerParada = 8 
let segundaParada = 5
let tecerParada = 0
let colectivoRoto =false

for (let i = pasajeros; i >= 0; i--){
    console.log(i)
    if(i == primerParada){
        console.log(`Primera parada se bajan ${2}, quedan ${(pasajeros-=2)}`);
    }
    else if (i == segundaParada){
        console.log(`Segunda parada se bajan ${3},quedan ${(pasajeros -= 3)}`)
        colectivoRoto =true
    }
    else if (i == tecerParada){
        console.log(`Segunda parada se bajan ${5},quedan ${(pasajeros -= 5)}`)
    }
    if (colectivoRoto){
        console.log("hay que arreglar el colectivo")
        break
    }
}
*/

/*
//bucles while
//contar una historia hasta FIN
let entrada = prompt("Contanos tu historia ")
//Repetimos con while hasta que el usuario ingrese "FIN"
while (entrada != "FIN"){
    console.log (`${entrada}`)
    //Volvemos a solicitar un data. En la proxima iteracion se evalua si no 
    entrada = prompt("Sigue contando tu historia")
}
*/


//DESAFIO

/*tenemos que haque una mayonesa, y la receta dice que tenemos que batir
3 minutos 
si bato de menos, no se hace
si bato de mas, se corta 
si bato justo, tenemos mayonesa
*/
let continuarBatiendo = true
let batidas =0 
do{
    let preguntarBatir = prompt ("sigo batiendo? Y / N").toUpperCase ();
    if (preguntarBatir == "N"){
        if (batidas > 3){
            console.log ("se te corto la mayonesa")
            continuarBatiendo = false 
        }
        else if (batidas == 3 ){
            console.log ("nos quedo perfecta")
            continuarBatiendo =false
        }
        else if ( batidas < 3 ){
            console.log ("no se hace ")
            continuarBatiendo = false 
        }
    
    }
    else if (preguntarBatir == "Y"){
        batidas++;
        console.log (`Van ${batidas} batidas`)
    }
    else {
        console.log ("ponte a batir")
    }

} while (continuarBatiendo)