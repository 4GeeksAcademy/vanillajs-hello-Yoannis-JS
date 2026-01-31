import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['el perro','mi abuela','su tortuga','mi pájaro'];
let what = ['se comió','orinó','aplastó','rompió'];
let when = ['antes de la clase','justo a tiempo','cuando terminé','durante mi almuerzo','mientras rezaba'];

function generarExcusa() {
  let quien = who[Math.floor(Math.random() * who.length)];
  let que = what[Math.floor(Math.random() * what.length)];
  let cuando = when[Math.floor(Math.random() * when.length)];

  let excusa = `${quien} ${que} mi tarea ${cuando}`;

  return excusa.charAt(0).toUpperCase() + excusa.slice(1);
}

window.onload = () => {
  document.getElementById("excuse").innerHTML = generarExcusa();

}
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("excuse").innerHTML = generarExcusa();
 });