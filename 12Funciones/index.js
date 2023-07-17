// function hola(){
//    console.log("Hola mundo");
// }

// hola();

// const chau = () => {
//    console.log("Chau");
// }

// chau();

// const suma = (a,b) =>{
//     console.log(a+b);
// }

// suma(2,4);

// Una funcion flecha (function arrow) le paso un array como parámetro.

//var a = ["chau"]; // Defino que a es un vector y le introduzco chau.

// function suma (a) {
//    a.push("hola");
//    console.log(a);
// }

// suma(a);
// console.log(a);

//********************** */

// var a = [];

// const suma = (a) => {
//    a.push("hola");
//    console.log(a);
// }

// suma(["chau"]);
// console.log(a);  // No lo ve los elementos del vector ya que en la funcion arrow function el scope es mucho mas chico.
// let a = "";
// (function(a){
//   console.log(a);
// })("Pedro")


// Funcion anonima.
// (function (){
//     console.log("Hola mundo");
// })()

// (function (nombre){
//    console.log("Hola mundo: "+ nombre);
// })("dani")
// Esta funcion se ejectua sola.

// Recursividad

const factorial = (n) => { 
    if ( n=== 1){
      return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5));