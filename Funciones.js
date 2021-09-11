var buttonCalificaciones = document.querySelector("#calificaciones")
var buttonCalificaciones2 = document.querySelector("#calificaciones2")


function obtenerCalificaciones(){

        var calificacion = prompt("¿Cual es tu Nota? ");

        if(isNaN(calificacion)){
            alert("ingresar un numero")

        }

        else { var redondear = Math.round(calificacion) }
            alert("Tu nota es: "+redondear)

}

function adivinaNumero(){

                
            var n1 = prompt("ingrese un numero")
            var calificacion = Math.random();
            var aleatoria = Math.round(calificacion*10)

            if(isNaN(n1)){
                alert("ingrese un nuemro")
            }   
            if(n1 == aleatoria){ 
            alert("Los numeros son iguales "+n1 + " !!!!!!!")
            }
            else{
                alert("Segui participando: "+   "Su numero es "+n1+ " y el aleatoria es "+aleatoria)
            }
}



buttonCalificaciones.addEventListener("click", obtenerCalificaciones);
buttonCalificaciones2.addEventListener("click", adivinaNumero);