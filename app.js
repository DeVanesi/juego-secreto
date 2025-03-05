/* 1ra version
let titulo = document.querySelector('h1'); 
//permite accedera a cada elemento del html
//el título tiene una serie de características
titulo.innerHTML ='Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al diez';

//la funcion
function intentoDeUsuario(){ //declaración de la funcion
    alert('Click desde el botón');
}
*/

/*2da version
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML =texto;
}
function intentoDeUsuario(){
    alert('Click desde el botón');
}

asignarTextoElemento('h1', 'Juego del número secreto'); 
asignarTextoElemento('p', 'Indica un número del 1 al diez');
*/

/*3ra versión
let numeroSecreto = generarNumeroSecreto(); //llama a la función asignado a una variable global

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML =texto;
    return; //las funciones retornan siempre algo, por lo que es más correcto es escribirlo
}
function verificarIntento(){ //se cambio el nombre también en el html
    //let numeroDeUsuario = document.querySelector('input'); 
    //la caja es el input en html y le agregamos el id
    //let numeroDeUsuario = document.getElementById('valorUsuario').value; //tomamos elemento por el id y el atributo value (valor)
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //para que la caja ingrese solo numero
    console.log(typeof(numeroSecreto));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario==numeroSecreto); //nos bota un resultado boleano
    return; //es buena práctica escribir el return
}

function generarNumeroSecreto(){
    //estas 2 líneas se pueden abreviar si asignamos una variable global del numero secreto
    //let numeroSecreto=Math.floor(Math.random()*10)+1;
    //return numeroSecreto;
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al diez'); */

/* 4ta versión
let numeroSecreto = 0;
let intentos = 0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML =texto;
}

function verificarIntento(){ 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos); 
    //El usuario no acertó
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'} `);
        //para activar el boton nuevo juego al acertar el numero
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{

        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();//llamamos a la funcion
    }
    return;
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = ''; //se puede reducir en : 
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al diez');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){ // para el onclik de html en el botón nuevo juego
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el numero aleatorio
    //inicializar el número de intentos
    condicionesIniciales();
    //deshabilitar el botón nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}
condicionesIniciales();

//se los lleva a la function de mensajes iniciales
//asignarTextoElemento('h1', 'Juego del número secreto');
//asignarTextoElemento('p', 'Indica un número del 1 al diez');
//-------------------------------------------------------------*/

/* 5ta versión
let numeroSecreto = 0;
let intentos = 0;
//declaramos la lista
let listaNumerosSorteados = []; //para almacenar los numeros aleatorios y que no se repitan
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML =texto;
}

function verificarIntento(){ 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled'); //activa boton nuevo juego
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {  
        //si el numero generado esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){ 
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');    
}
condicionesIniciales(); */

// 6ta versión
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML =texto;
}

function verificarIntento(){ 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        } else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {  
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){ 
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');    
}
condicionesIniciales();

