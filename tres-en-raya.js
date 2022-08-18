
// Colocar piezas -------------------------------------------------

var id_tabla = document.getElementById("tablero");
id_tabla.addEventListener("click", ver_celda);

var contador = 0;

function ver_celda(e){
    var celda = e.target.id;
    //console.log(document.getElementById(celda).firstChild);
    if(document.getElementById(celda).firstChild != "" ){
        if(contador%2 == 1){
            document.getElementById(celda).innerHTML = "<img src='./Imagenes/orc.png' class='imagen'>";
            document.getElementById(celda).style.opacity="1";
        }else if(contador%2 == 0){
            document.getElementById(celda).innerHTML = "<img src='./Imagenes/knight.png' class='imagen'>";
            document.getElementById(celda).style.opacity="1";
        }
    }else{
        contador--;
    }
    contador++;
} 

// Reiniciar Juego -------------------------------------------------

var reset = document.getElementById("reset");
reset.addEventListener("click", reiniciar_juego);

function reiniciar_juego(){
    var celdas = ['0','1','2','3','4','5','6','7','8'];
    for(var i = 0; i<celdas.length; i++){
        document.getElementById(celdas[i]).innerHTML = "";
        document.getElementById(celdas[i]).style.opacity="0.5";
    }
}


//SUMAR VICTORIAS AL MARCADOR -------------------------------------

var suma_orco = document.getElementById("sumar-orco");
suma_orco.addEventListener("click", function(){
    var puntosOrco = parseInt(document.getElementById("w-orco").value);
    document.getElementById("w-orco").value = puntosOrco + 1;
});

var suma_soldado = document.getElementById("sumar-soldado");
suma_soldado.addEventListener("click", function(){
    var puntosSoldado = parseInt(document.getElementById("w-soldado").value);
    document.getElementById("w-soldado").value = puntosSoldado + 1;
});


