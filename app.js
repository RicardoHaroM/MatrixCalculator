function añadirElemento(elemento, numero, clase) {
    var matriz = document.getElementsByClassName("matriz");
    elemento.classList.add(clase)
    matriz[numero].appendChild(elemento);
}

function crearMatriz() {
    var filas = document.getElementById("filas").value;
    var columnas = document.getElementById("columnas").value;
    var matriz = document.getElementsByClassName("matriz");
    matriz[0].innerHTML="";
    matriz[0].style.display = "grid";
    matriz[0].style.gridTemplateRows = `repeat(${filas},1fr)`;
    matriz[0].style.gridTemplateColumns = `repeat(${columnas},1fr)`;
    for (var i = 0; i < filas; i++) {
        for (var j = 0; j < columnas; j++) {
            var elemento = document.createElement("input");
            elemento.type = "number";
            añadirElemento(elemento, 0, "primera");
        }
    }
    var filas2 = document.getElementById("filas2").value;
    var columnas2 = document.getElementById("columnas2").value;
    matriz[1].innerHTML="";
    matriz[1].style.display = "grid";
    matriz[1].style.gridTemplateRows = `repeat(${filas2},1fr)`;
    matriz[1].style.gridTemplateColumns = `repeat(${columnas2},1fr)`;
    for (var i = 0; i < filas2; i++) {
        for (var j = 0; j < columnas2; j++) {
            var elemento = document.createElement("input");
            elemento.type = "number";
            añadirElemento(elemento, 1, "segunda");
        }
    }


}
function sumar() {
    var filas = document.getElementById("filas").value;
    var columnas = document.getElementById("columnas").value;
    var filas2 = document.getElementById("filas2").value;
    var columnas2 = document.getElementById("columnas2").value;
    if (filas == filas2 && columnas == columnas2) {

        var primera = document.getElementsByClassName("primera");
        var segunda = document.getElementsByClassName("segunda");
        var matriz = document.getElementById("resultado");
        matriz.innerHTML="";
        for (var i = 0; i < primera.length; i++) {
            var resultado = document.createElement("input");
            resultado.type = "number";
            resultado.value = parseInt(primera[i].value) + parseInt(segunda[i].value);
            matriz.appendChild(resultado);
        }
        matriz.style.display = "grid";
        matriz.style.gridTemplateRows = `repeat(${filas2},1fr)`;
        matriz.style.gridTemplateColumns = `repeat(${columnas2},1fr)`;
    }
    else {
        alert("The number of columns and rows of the two matrices are not equal");
    }
}
function restar() {
    var filas = document.getElementById("filas").value;
    var columnas = document.getElementById("columnas").value;
    var filas2 = document.getElementById("filas2").value;
    var columnas2 = document.getElementById("columnas2").value;
    if (filas == filas2 && columnas == columnas2) {
        var primera = document.getElementsByClassName("primera");
        var segunda = document.getElementsByClassName("segunda");
        var matriz = document.getElementById("resultado");
        matriz.innerHTML="";
        for (var i = 0; i < primera.length; i++) {
            var resultado = document.createElement("input");
            resultado.type = "number";
            resultado.value = parseInt(primera[i].value) - parseInt(segunda[i].value);
            matriz.appendChild(resultado);
        }
        matriz.style.display = "grid";
        matriz.style.gridTemplateRows = `repeat(${filas2},1fr)`;
        matriz.style.gridTemplateColumns = `repeat(${columnas2},1fr)`;
    }
    else {
        alert("the number of columns and rows of the two matrices are not equal");
    }
}
function multiplicar() {
    var matriz1 = [];
    var matriz2 = [];
    var matriz = document.getElementById("resultado");
    var filas = document.getElementById("filas").value;
    var columnas = document.getElementById("columnas").value;
    var filas2 = document.getElementById("filas2").value;
    var columnas2 = document.getElementById("columnas2").value;
    if (columnas == filas2) {
        matriz.innerHTML="";
        var elemento = document.getElementsByClassName("primera");
        var j = 0;
        for (var i = 0; i < filas; i++) {
            var arreglo = [];
            for (var k = 0; k < parseInt(columnas); k++, j++) {
                arreglo.push(elemento[j].value);
            }
            matriz1.push(arreglo);
        }
        var elemento2 = document.getElementsByClassName("segunda");
        var j = 0;
        for (var i = 0; i < filas2; i++) {
            var arreglo = [];
            for (var k = 0; k < parseInt(columnas2); k++, j++) {
                arreglo.push(elemento2[j].value);
            }
            matriz2.push(arreglo);
        }
        
        for (var i = 0; i < filas; i++) {
            for (var h = 0; h < columnas2; h++) {
                var resultado = document.createElement("input");
                resultado.type = "number";
                var res = 0;
                for (var k = 0; k < filas2; k++) {
                    res += (parseInt(matriz1[i][k]) * parseInt(matriz2[k][h]));
                }
                resultado.value = res;
                matriz.appendChild(resultado);
            }
        }
        matriz.style.display = "grid";
        matriz.style.gridTemplateRows = `repeat(${filas},1fr)`;
        matriz.style.gridTemplateColumns = `repeat(${columnas2},1fr)`;
    } else {
        alert("The number of columns in the first matrix must match the number of rows in the second matrix");
    }

}