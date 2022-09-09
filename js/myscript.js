
//document.getElementById("name").addEventListener("keydown", setName());
/*let now = new Date();
document.getElementById("fechaActual").valueAsDate = new Date();
// function setName(){
//     let campo = document.getElementById("campo");
//     console.log(campo);
//     campo.innerHTML = campo.innerHTML + event.key;
// }
/*
function habilitarCategoria(){
    let campo = document.getElementById("persona");
    let selected = campo.options[campo.selectedIndex].text;
    if (selected == "Persona"){
        document.getElementById("masInfo").style.visibility = "visible";
    } else {
        document.getElementById("masInfo").style.visibility = "hidden";
    }
}*/

function calcularLetras(){
    let oracion = document.getElementById("oracion");
    let cant= document.getElementById("cant");
    let c = 0;
    let str = oracion.value;
    let countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;
   /* for (let i=0; i < oracion.value.length; i++){

        if (oracion.value[i]=="a"||
        oracion.value[i]=="e"||
        oracion.value[i]=="i"||
        oracion.value[i]=="o"||
        oracion.value[i]=="u"){
            c++
        }
    }*/
    console.log(countVowels);
    cant.value = countVowels;
    return false;
}