// 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a saber cuál será su sueldo semanal, 
// se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
// entonces las horas extras se le pagarán a $25 por hora.

    function calcularSueldoSemanal(horasTrabajadas){
        const tarifaNormal = 20;
        const tarifaExtra = 25;
        const horasNormales = 40;

        if(horasTrabajadas > horasNormales){
            sueldoSemanal = horasTrabajadas * tarifaNormal;
        }else {
            const horasExtras = horasTrabajadas - horasNormales;
            sueldoSemanal = (horasTrabajadas*tarifaNormal) + (horasExtras*tarifaExtra);
        }
        return sueldoSemanal;
    }

    let horasTrabajadas = parseInt(prompt("Ingresar sus horas trabajadas de la semana:"));
    const sueldo = calcularSueldoSemanal(horasTrabajadas);
    alert("Su sueldo semanal es de: "+sueldo);