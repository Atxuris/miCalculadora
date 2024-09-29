//Esta función agrega el valor del botón que toquemos en la calculadora
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
//Esta acción vacía la pantalla
function limpiar(){
    document.getElementById('pantalla').value =''
}
//Esta acción toma el valor de la pantalla y realiza los cálculos
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
} 
//Esta acción debería borrar sólo un caracter
function borrar(){
    const pantalla = document.getElementById('pantalla');
    pantalla.value =pantalla.value.slice(0, -1);
}
//DARK MODE
const swith = document.querySelector(".switch");

swith.addEventListener("click", e =>{
    swith.classList.toggle("active");
    document.body.classList.toggle("active");
})