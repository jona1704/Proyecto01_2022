// Imprimir mensaje
console.log("Hola Mundo")

// Crear variable
console.log("\n**** Creando variables (var) ****");
var a = "5";
console.log(a);

// Funcion
console.log(suma());
function suma(){
    var a=3;
    var b=5;
    return a+b;
}

// Crear variable
console.log("\n**** Creando variables (let) ****");
let b = "5";
console.log(b);

// Reasignando valor y tipo
b = 4000;
console.log(b);

// let trabaja a nivel de bloque
function prueba(){
    let a = 6;
    let esverdad = true;
    if(a==6){
        let b=10;
        console.log(a);
        console.log(b);
    }
    console.log(a);
    //console.log(b); // ERROR de alcance
}

prueba();

// Const
console.log("\n**** Creando constante (const) ****");
const c = 300;
console.log(c);

// c = 4000; // ERROR: No es posible cambiar una constante
// console.log(c);

// Booleanos
console.log("\n**** Creando booleanos ****");
var esVerdad = true;
console.log(esVerdad);

// Sentencias de control
let d = 10;
// If
console.log("\n**** if ****");
if(d < 5){
    console.log("Es menor")
} else if(d<5 && d>8){
    console.log("Es intermedio")
}
else{
    console.log("Es mayor")
}

// Case
let calificacion=10;
switch(calificacion){
    case 5: console.log("Reprobado");
            break;
    case 6: console.log("Pansaste");
            break;
    case 7: console.log("Mas o menos");
            break;
    case 8: console.log("Bien");
            break;
    case 9: console.log("Muy Bien");
            break;
    case 10: console.log("Excelente");
            break;
    default: console.log("Calificacion no valida");
}

// For
console.log("\n**** For ****");
for(let v=1; v<10; v++){
    console.log(v);
}

// while
let cont=0;
console.log("\n**** While ****");
while(cont<10){
    console.log(cont);
    cont++;
}

// do-while
cont=0;
console.log("\n**** Do - While ****");
do{
    console.log(cont);
    cont++;
} while(cont<10);

// Objeto
console.log("\n**** Creando Objeto ****");
let objeto = {
    nombre : "Computadora",
    precio : 10000,
    enBodega : true
};

console.log(objeto.nombre)

// Declarando el mismo objeto usando clases
console.log("\n**** Creando Clase ****");
class Objeto{
    constructor(nombre, precio, enBodega){
        this.nombre = nombre;
        this.precio = precio;
        this.enBodega = enBodega;
    }

    getNombre() {
        return this.nombre;
    }

    getPrecio() {
        return this.precio;
    }

   getEnBodega() {
        return this.enBodega;
    }
}

// Instanciar
let objeto1 = new Objeto("Computadora",1000,true);
console.log(objeto1.getEnBodega());


// Declarar mas de una variable
console.log("\n**** Declaración Múltiple ****");
let num=7, nom = "Juan", esListo = true;
console.log(num)
console.log(nom)
console.log(esListo)