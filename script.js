// Esto es el comentario en una sola linea

/*esto es para un 
coemntario multilinea, 
todo es comenatrio*/

//Esto es un alert
//alert("Hola Mundo")


/*let alumno ="Fede" //con let defino y creo la variable    
let nota= 9

alumno= "Emiliano"
alumno= "Jose" //le asigno un nuevo nombre a la variable y pisa el nombre anterior

console.log (alumno);   // la imprimo o muestra en la consola de js. M edevuelve el contenido de a variable por consola: Fede.
console.log ("El nombre del alumno es:"+ alumno); // con + concateno un string con la variable 
console.log ("El nombre del alumno es:"+ alumno + " y su nota es:"+ nota);

let alumnoApellido=""// declaron la varible de mas de una palabra uso camelCase: min, may
*/

/*console.log (typeof 3) //me dice que es un number
console.log (typeof "hola") // me dice que es un string


//maneras de crear variables
/*let nombreApellido=" Juan Lopez" //camel Case min/ may
let NombreApellido =""
let nombre_apellido="" 
let User=""     //comenzar con mayuscula el nombre d ela variable
let _usuario="" // con guion bajo
let $user =""  // con signo peso o dolar*/

// TIPOS DE DATOS
//STRING: van entre comillas dobles, simples y francesas
/*
let str1= "Juan"  
let str2= 'Pedro'
let str3= `Ramiro`

let str4= str1 + " y " + str2 // ambas dan como resultado Juan y Pedro
let srt5= `${str1} y ${str2}`*/

/*
console.log = (str4)
console.log = (str5)

// NUMBER
/*
let num1= 2
let num2= 3

//operaciones basicas

let suma=num1+num2
let resta=num1-num2
let mult=num1*num2 
let division =num1 /num2

console.log("la suma es:" + suma)
console.log("la resta es:" + resta)
console.log("la multiplicacion es:" + mult)
console.log("la division es:" + division)*/




/*let num1 = prompt("ingrese el primer numero")
let num2 = prompt("ingrese el segundo numero")

let suma=num1+num2
let resta=num1-num2
let mult=num1*num2 
let division =num1 /num2

console.log("la suma es:" + suma) // la seuma la concateno haciend 3+4 = 34 para corregir esto debo pasear o sea colocar paseint delante de prompt
console.log("la resta es:" + resta)
console.log("la multiplicacion es:" + mult)
console.log("la division es:" + division)*/

//como prompt me devuelve por pantalla un string debo convertirlo a numero entero colocandole parseint delante del prompt
let num1 = paseInt(prompt("ingrese el primer numero"))
let num2 = parseInt(prompt("ingrese el segundo numero"))
//si ngreso un nume3ro decimal uso parseFloat
let suma= num1 + num2
let resta= num1 - num2
let mult= num1 * num2 
let division = num1 / num2

//PUEDO USAR alert en lugar de console.log
alert("la suma es:" + suma)
console.log("la resta es:" + resta)
console.log("la multiplicacion es:" + mult)
console.log("la division es:" + division)

document.write("<h1>escribo en el documentoy lo muestro en el navegador</h1>" + mult)