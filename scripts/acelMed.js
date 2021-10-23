import Calculadora from './Calculadora.js';

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let button = document.querySelector("#button");
let par = document.querySelector("#par");
let calculadora = new Calculadora(par);

button.addEventListener("click", calcula);

function calcula(){
    calculadora.acelMed(Number(input1.value), Number(input2.value));
}