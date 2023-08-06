// 32. Se quiere saber cuál es la ciudad con la población de más personas, son tres provincias y once ciudades, hacer un algoritmo en JavaScript que nos permita saber eso. (NO HAY DATOS SUFICIENTES)

function ciudadConMayorPoblacion(datosCiudades) {
    let ciudadMayorPoblacion = "";
    let poblacionMayor = 0;
  
    for (const ciudad in datosCiudades) {
      const poblacion = datosCiudades[ciudad];
      if (poblacion > poblacionMayor) {
        poblacionMayor = poblacion;
        ciudadMayorPoblacion = ciudad;
      }
    }
  
    return ciudadMayorPoblacion;
  }
  
  const datosCiudades = {
    "Ciudad A": 120000,
    "Ciudad B": 85000,
    "Ciudad C": 175000,
  };
  
  const ciudadConMasPoblacion = ciudadConMayorPoblacion(datosCiudades);
  alert("La ciudad con la población más alta es: ${ciudadConMasPoblacion}");
  