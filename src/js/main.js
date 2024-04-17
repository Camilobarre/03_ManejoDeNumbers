// //Creacion de números 
// let numero1 = 45
// let numero2 = Number(45)
// let numero3 = new Number(45)

// console.info(numero1)
// console.info(typeof(numero1))
// console.info(numero2)
// console.info(numero3)

// console.info(Number.MAX_VALUE)
// console.info(Number.MIN_VALUE)

// //Operaciones matemáticas
// const numero1 = 5
// const numero2 = Number("10")

// console.info(numero1 + numero2)
// console.info(numero1 - numero2)
// console.info(numero1 * numero2)
// console.info(numero1 / numero2)

// let numero1 = Number.parseInt(prompt("Ingresa un número entero:")) //ParseInt entiende un número entero
// let numero2= Number.parseFloat(prompt("Ingresa un númeo decimal:")) //ParseFloar entiende un número decimal

// console.info(typeof(numero1)) //Te indica el tipo de dato que ingresas
// console.info(typeof(numero2))

// console.info(Number.isInteger(numero1))
// console.info(Number.isInteger(numero2))

// let numero= 1551
// console.info(String(numero))
// console.info(numero.toString(2)) //Con el 2 se convierten en números binarios
// console.info(numero.toString(8))
// console.info(numero.toString(16)) //Esta es la caracterizacion hexadecimal, pueden salir los colores de ahí

// const numeroEjemplo = 502.15225
// console.info(numeroEjemplo)
// console.info(numeroEjemplo.toFixed(2)) //Añade o redondea los decimales
// console.info(numeroEjemplo.toFixed(3))
// console.info(numeroEjemplo.toFixed(4))
// console.info(numeroEjemplo.toFixed(5))
// console.info(numeroEjemplo.toFixed(6))
// console.info(numeroEjemplo.toFixed(7))
// console.info(numeroEjemplo.toFixed(100))

// numeroEjemplo = 15
// console.info(numeroEjemplo)
// console.info(numeroEjemplo.toExponential())
// console.info(numeroEjemplo.toExponential(45))
// console.info(numeroEjemplo.toExponential(100))

// const numeroEjemplo = 888888888888888888888

// console.info(numeroEjemplo)
// console.info(numeroEjemplo.toExponential())
// console.info(numeroEjemplo.toPrecision(5))

// //Clase Math
// console.log(2*2*2*2*2*2*2*2*2*2*2*2*2*2*2)
// console.log(2**20) //Otra forma de elevar la potencia
// console.log(2*20)
// console.log(Math.pow(2,20))
// console.log(Math.sqrt(5744252384124255))
// console.log(Math.cbrt(68)) //Raiz cúbica
// console.log(Math.cos(1516))
// console.log(85)
// console.log(Math.abs(-85))


// let numero=-54

// if(78>0){
//     console.log("Es positivo")
// } else{
//     console.log("Es negativo")
// }

// console.log(Math.sign(numero)) //Con clase sign puedo saber si un número es positivo o negativo

// console.info(Math.max(48,99,55,2,66.4,77)) //Número máximo de un arreglo
// console.info(Math.min(48,99,55,2,66.4,77)) //Número mínimo de un arreglo

// let numero=2.9
// document.write(numero)

// //Redondear un número
// console.info(Math.round(numero)) //Redondear un número
// console.info(Math.floor(numero)) //Redondear por debajo
// console.info(Math.ceil(numero)) //Redondear por encima

// //Metódo random para generar un numero
//(valor superior - valor inferior) + valor inferior
// let numero1 = Math.round(Math.random() * 100)
// let numero2 = Math.round(Math.random() * (92 - 90 + 1) + 90)
// document.write(numero)