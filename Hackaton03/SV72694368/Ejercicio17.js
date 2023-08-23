function ejercicio17() {
    let a=prompt("Ingresa horas:")    
    let hh = parseInt(a);
    let b=prompt("Ingresa minutos:")    
    let mm = parseInt(b);
    let c=prompt("Ingresa segundos:")    
    let ss = parseInt(c);


    if (hh < 24 && mm < 60 && ss < 60) {
        ss = ss + 1;
        if (ss === 60) {
            ss = 0;
            mm = mm + 1;
            if (mm === 60) {
            mm = 0;
            hh = hh + 1;
            if (hh === 24) {
                hh = 0;
            }
            }
        }
    }
    alert(hh + " : " + mm + " : " + ss);
}

    ejercicio17();