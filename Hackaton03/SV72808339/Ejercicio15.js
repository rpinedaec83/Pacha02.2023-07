/* 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos. */

const cent = 100, lib = 170;
let pulg = 0, kil = 0;

pulg = cent/2.54
pulg = pulg.toFixed(2)

kil = lib*2.205
kil = kil.toFixed(2)

console.log(cent+" centímetros son: " + pulg + " pulgadas.")
console.log(lib+" libras son: " + kil + " kilogramos.")