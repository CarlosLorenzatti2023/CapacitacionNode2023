function valorRandom(){
    var min = 0;
    var max = 100;
    var x = Math.floor(Math.random()*(max-min)+min);
    return x;
}

let P1_games = 0;
let P2_games = 0;

let puntuaciones = [0, 15, 30, 40 ]; // puntuaciones de ambos jugadores.
let P1_points = 0;
let P2_points = 0;
let condicion = false;
let finished = false;
let diferencia = 0;

while (!condicion){
    let numero = valorRandom();
    console.log(numero);
    
    if (numero <= 50){ // Segun cual jugador gano el punto vamos incrementando el contador de cada jugador.
        P1_points = P1_points + 1; //El contador de tantos del jugador 1
    }else{
        P2_points = P2_points + 1;  //El contador de tantos del jugador 2
    }


    if ((P1_points >= 3) && (P2_points>=3)){
       if (P1_points == P2_points){
          console.log(`Estan empatados en: ${puntuaciones[P1_points]}`); // Si estan empatados muestro cualquiera de los dos.
        }else{
            diferencia = Math.abs(P1_points - P2_points);
           if (P1_points > P2_points){
              if (diferencia > 1){
                   console.log(`Gano el jugador P1 el primer game`);
                   P1_games = P1_games + 1;
                   condicion = true;
              }else{
                console.log(`Ventaja del Jugador P1`);
              }
            
            }else{
                if (diferencia > 1){
                   console.log(`Gano el jugador P2 el primer game`);
                   P2_games = P2_games + 1;
                   condicion = true;

                }else{
                    console.log(`Ventaja el Jugador P2`);
                }
             
         } 
            
       }


    }else{  // No van empatado, muestro los puntos.
        console.log( ` Puntos P1 ${puntuaciones[P1_points]} - Puntos P2 ${puntuaciones[P2_points]} `)
           
    }


    


}