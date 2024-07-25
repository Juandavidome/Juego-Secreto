let numeroMaximo = 10;
let listaNumerosSorteados = [];
let numeroRandom = generarNumeroSecreto();
let intento = 1;

function asignarTextoElemento(elemento, texto)
{
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
} 
function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroUsuario == numeroRandom)
    {   
        asignarTextoElemento('p',`Acertaste el numero en ${intento} ${(intento ===1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else 
    {
        if (numeroUsuario > numeroRandom)
            {   
                asignarTextoElemento('p','El numero secreto es menor');
            }
        else
           {
            asignarTextoElemento('p','El numero secreto es mayor');
           }
        intento ++;
        limpiarCaja();
    }
    return;
}

function mensajesIniciales()
{
    asignarTextoElemento('h1', 'Juego del Numero Secreto');
    asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}`);
}

function limpiarCaja()
{
    document.querySelector('#valorUsuario').value = ('');
}

function generarNumeroSecreto()
{  
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteo todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo)
    {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros');
    }
    else
    {
    //Si el numerogenerado esta incluido en la lista     
        if(listaNumerosSorteados.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }                                          
        else
        {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }                                         
}

function deshabilitarBoton()
{
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function reiniciarJuego()
{
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
     mensajesIniciales();
    //Gnerar el numeor aleatorio
    numeroRandom = generarNumeroSecreto();
    //Dejar el boton deshabilitado
    deshabilitarBoton();
}
asignarTextoElemento('h1', 'Juego del Numero Secreto');
asignarTextoElemento('p', `Ingresa un numero del 1 al ${numeroMaximo}`);