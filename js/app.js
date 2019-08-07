// Imprime en la consola
console.log("Hello world");
// Escribe en el DOM de HTML
document.write("Hello world");

// Ejemplos de tipos de datos

// ==== Entero
// "let" indica que vamos a crear una variable
let i_am_int = 5;
// Muestra en consola el número 5
console.log(i_am_int);

// ==== Flotante
let i_am_float = 3.1416;
// Muestra en consola "El valor de pi es: 3.1416"
console.log("El valor de pi es: " + i_am_float);

// ==== Cadena de texto
let i_am_string = "Yo soy cadenín";
// Realiza un salto de línea y escribe el valor de "i_am_string"
document.write("<br>" + i_am_string);

// ==== Boolean
let i_am_bool = true;
// Muestra en consola el valor de i_am_bool
console.log("El valor de i_am_bool es: ", i_am_bool);

// Funciones
/**
 * Nota:
 *  - Las funciones se definene con la palabra "function"
 *  - La firma de la función no necesita tener el tipo de dato que se regresa
 *  - Los parámetros tampoco manejan el tipo de dato
 *  - Se pueden usar variables sin declararlas usando let.
 */
function get_total_price(price_without_taxes) {
  return price_without_taxes * 1.16;
}

price_without_taxes = 10;
total = get_total_price(price_without_taxes);
console.log("El precio final es de: ", total)
