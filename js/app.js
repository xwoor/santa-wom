// Numero de copos, recomendados entre 30 y 40
var nieve_cantidad = 70;

// Colores de los copos se mostraran de forma aleatoria
var nieve_colorr = new Array("#aaaacc", "#ddddFF", "#ccccDD")

// Tipo de letra de los copos
var nieve_tipo = new Array("Arial Black", "Arial Narrow", "Times", "Comic Sans MS")

// Valor o letra de los copos
var nieve_letra = "*"

// velocidad de caida
var nieve_velocidad = 1.0;

// tamaño mas grande de los copos
var nieve_cantidadsize = 30

// tamaño mas pequeño de los copos
var nieve_chico = 8

// 1 toda la pagina - 2 zona izquierda - 3 centro de pagina - 4 zona derecha
var nieve_zona = 1

var nieve = new Array()
var marginbottom
var marginright
var timer
var i_nieve = 0
var x_mv = new Array();
var crds = new Array();
var lftrght = new Array();
var browserinfos = navigator.userAgent
var ie5 = document.all && document.getElementById && !browserinfos.match(/Opera/)
var ns6 = document.getElementById && !document.all
var opera = browserinfos.match(/Opera/)
var browserok = ie5 || ns6 || opera

function aleatorio(range) {
    rand = Math.floor(range * Math.random())
    return rand
}

function initnieve() {
    if (ie5 || opera) {
        marginbottom = document.body.clientHeight
        marginright = document.body.clientWidth
    }
    else if (ns6) {
        marginbottom = window.innerHeight
        marginright = window.innerWidth
    }
    var nievesizerange = nieve_cantidadsize - nieve_chico
    for (i = 0; i <= nieve_cantidad; i++) {
        crds[i] = 0;
        lftrght[i] = Math.random() * 15;
        x_mv[i] = 0.03 + Math.random() / 10;
        nieve[i] = document.getElementById("s" + i)
        nieve[i].style.fontFamily = nieve_tipo[aleatorio(nieve_tipo.length)]
        nieve[i].size = aleatorio(nievesizerange) + nieve_chico
        nieve[i].style.fontSize = nieve[i].size
        nieve[i].style.color = nieve_colorr[aleatorio(nieve_colorr.length)]
        nieve[i].sink = nieve_velocidad * nieve[i].size / 5
        if (nieve_zona == 1) { nieve[i].posx = aleatorio(marginright - nieve[i].size) }
        if (nieve_zona == 2) { nieve[i].posx = aleatorio(marginright / 2 - nieve[i].size) }
        if (nieve_zona == 3) { nieve[i].posx = aleatorio(marginright / 2 - nieve[i].size) + marginright / 4 }
        if (nieve_zona == 4) { nieve[i].posx = aleatorio(marginright / 2 - nieve[i].size) + marginright / 2 }
        nieve[i].posy = aleatorio(2 * marginbottom - marginbottom - 2 * nieve[i].size)
        nieve[i].style.left = nieve[i].posx + 'px';
        nieve[i].style.top = nieve[i].posy + 'px';
    }
    movenieve()
}

function movenieve() {
    for (i = 0; i <= nieve_cantidad; i++) {
        crds[i] += x_mv[i];
        nieve[i].posy += nieve[i].sink
        nieve[i].style.left = nieve[i].posx + lftrght[i] * Math.sin(crds[i]) + 'px';;
        nieve[i].style.top = nieve[i].posy + 'px';

        if (nieve[i].posy >= marginbottom - 2 * nieve[i].size || parseInt(nieve[i].style.left) > (marginright - 3 * lftrght[i])) {
            if (nieve_zona == 1) { nieve[i].posx = aleatorio(marginright - nieve[i].size) }
            if (nieve_zona == 2) { nieve[i].posx = aleatorio(marginright / 2 - nieve[i].size) }
            if (nieve_zona == 3) { nieve[i].posx = aleatorio(marginright / 2 - nieve[i].size) + marginright / 4 }
            if (nieve_zona == 4) { nieve[i].posx = aleatorio(marginright / 2 - nieve[i].size) + marginright / 2 }
            nieve[i].posy = 0
        }
    }
    var timer = setTimeout("movenieve()", 50)
}

for (i = 0; i <= nieve_cantidad; i++) {
    document.write("<span id='s" + i + "' style='position:absolute;top:-" + nieve_cantidadsize + "'>" + nieve_letra + "</span>")
}
if (browserok) {
    window.onload = initnieve
}

// Función para reiniciar el juego y el valor en LocalStorage
function reiniciarJuego() {
    let confirmacion = confirm("¿Desea reiniciar el juego y borrar la información almacenada?");
    if (confirmacion) {
        localStorage.setItem("contador", 0);
        window.location.reload();// Actualizar la visualización del valor
    }
}

document.getElementById("reiniciarBoton").addEventListener("click", reiniciarJuego);
// Se obtiene el valor del contador actual
var contador = localStorage.getItem("contador");
contador = parseInt(contador);
//Reemplazar imagen por porcentaje
var imgPorcentaje = document.getElementById('imgPorcentaje')
var completado = document.getElementById('completado')
// Cambiar el atributo src de la imagen
if (contador == 0) {
    imgPorcentaje.src = './img/progreso_0.svg'
} else if (contador >= 99) {
    localStorage.setItem("contador", 0);
    contador = localStorage.getItem("contador");
    completado.textContent = 'Hemos logrado la meta'
    imgPorcentaje.src = './img/progreso_100.svg'
    console.log(contador,);
} else if (contador >= 90) {
    imgPorcentaje.src = './img/progreso_90.svg'
    console.log(contador);
} else if (contador >= 80) {
    imgPorcentaje.src = './img/progreso_80.svg'
    console.log(contador);
} else if (contador >= 70) {
    imgPorcentaje.src = './img/progreso_70.svg'
    console.log(contador);
} else if (contador >= 60) {
    imgPorcentaje.src = './img/progreso_60.svg'
    console.log(contador);
} else if (contador >= 50) {
    imgPorcentaje.src = './img/progreso_50.svg'
    console.log(contador);
} else if (contador >= 40) {
    imgPorcentaje.src = './img/progreso_40.svg'
    console.log(contador);
} else if (contador >= 30) {
    imgPorcentaje.src = './img/progreso_30.svg'
    console.log(contador);
} else if (contador >= 20) {
    imgPorcentaje.src = './img/progreso_20.svg'
    console.log(contador);
} else if (contador >= 10) {
    imgPorcentaje.src = './img/progreso_10.svg'
    console.log(contador);
} else {
    imgPorcentaje.src = './img/progreso_10.svg'
    console.log(contador);
}
