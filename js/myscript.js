
function holaMundo(){
    alert ("hola mundo");
    let elem = document.getElementById("");
}

document.getElementById("name").addEventListener("keydown", setName());
function setName(){
    let campo = document.getElementById("campo");
    console.log(campo);
    campo.innerHTML = campo.innerHTML + event.key;
}