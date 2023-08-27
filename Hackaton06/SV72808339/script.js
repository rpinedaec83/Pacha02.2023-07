class Sucursal {
    constructor(nombre){
        this.nombre = nombre;
        this.telefonos = []
        this.tecnicos = []
    }

    agregar_telefono(telefono){
        this.telefonos.push(telefono)
        console.log(`El teléfono ${telefono.marca} ${telefono.modelo} ha sido añadido a la sucursal ${this.nombre}`)
    }

    agregar_tecnico(tecnico){
        this.tecnicos.push(tecnico)
        console.log(`El técnico ${tecnico.nombre} ha sido añadido a la sucursal ${this.nombre}`)
    }
}

class Telefono {
    constructor(serie, imei, marca, modelo) {
        this.serie = serie;
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.autorizacion = false;
        this.pago_parcial = false;

        this.tecnico_encargado = null;
        this.estado = 1; //1 = en revisión, 2 = diagnosticado, 3 = en reparación, 4 = reparado
        this.diagnosticos = [];
        this.repuestos = [];
    }

    static registro_series = [];
    static registro_imei = [];

    static crear_telefono(serie, imei, marca, modelo) {
        if (Telefono.reg_series.includes(serie) || Telefono.reg_imei.includes(imei)) {
            console.log("Este teléfono ya ha sido registrado.");
            return null;
        } else {
            const tel = new Telefono(serie, imei, marca, modelo);
            Telefono.reg_series.push(serie);
            Telefono.reg_imei.push(imei);
            return tel;
        }
    }

    autorizar(mensaje){
        this.autorizacion = true;
        console.log(`Se ha dado la autorización del usuario:
"${mensaje}"`)
    }

    confirmar_pago(){
        this.pago_parcial = true;
        console.log(`Se ha efectuado el pago parcial.`)
    }

    asignar_tecnico(sucursal){
        let recomendaciones = [];
        for (let i = 0; i < sucursal.tecnicos.length; i++) {
            const e = sucursal.tecnicos[i];
            if (e.verificar_especializacion(this.marca) != null){
                recomendaciones.push(e)
            }
        }
        if (recomendaciones.length === 0){
            console.log(`Lo lamentamos, no se ha podido encontrar un técnico que se especialice en esta marca.`)
        } else if (recomendaciones.length === 1){
            console.log(`Hemos encontrado un técnico que se especializa en esta marca! El técnico ${recomendaciones[0].nombre} se encargará del diagnóstico y reparación.`)
        } else if (recomendaciones.length > 1){
            console.log(`Hemos encontrado ${recomendaciones.length} técnicos que se adecúan al dispositivo.`)
            console.log("Elija un técnico:")
            for (let i = 0; i < recomendaciones.length; i++) {
                const e = recomendaciones[i];
                console.log(`${i+1}. ${e.nombre} (${e.experiencia} años de experiencia)`)
            }
            this.tecnico_encargado = recomendaciones[0]
        }
    }

    diagnosticar(diagnostico) {
        if (this.pago_parcial && this.autorizacion){
            if (!this.diagnosticos.includes(diagnostico)){
                this.diagnosticos.push(diagnostico)
                console.log("Diagnostico agregado: ",diagnostico)
                this.estado = 2 //1 = en revisión, 2 = diagnosticado, 3 = en reparación, 4 = reparado

            } else {
                console.log("Ya se ha registrado este diagnóstico con anterioridad")
            }
        } else {console.log("No se ha dado la autorización del usuario o el pago del 50%")}
    }

    revisar_diagnostico(numero) {
        switch (numero) {
            case 0:
                console.log("Los diagnósticos se cuentan desde el 1")
                break;
        
            default:
                console.log(this.diagnosticos[numero])
                break;
        }
    }

    añadir_repuesto(repuesto) {
        if (this.pago_parcial && this.autorizacion){
            this.repuestos.push(repuesto);
            console.log("Se ha añadido el repuesto.")
        } else {console.log("No se ha dado la autorización del usuario o el pago del 50%")}
    }

    empezar_reparacion(){
        if (this.pago_parcial && this.autorizacion){
            if(this.diagnosticos.length != 0){
                this.estado = 3; //1 = en revisión, 2 = diagnosticado, 3 = en reparación, 4 = reparado
                console.log(`El telefono está siendo reparado y ${this.tecnico_encargado.nombre} es el técnico encargado de repararlo.`)
            } else {
                console.log("El telefono aún no ha sido diagnosticado.")
            } 
        } else {console.log("No se ha dado la autorización del usuario o el pago del 50%")}
    }

    registrar_reparo(){
        if(this.diagnosticos.length != 0){
            this.estado = 4; //1 = en revisión, 2 = diagnosticado, 3 = en reparación, 4 = reparado
            console.log(`El telefono ha sido reparado con éxito y ${this.tecnico_encargado.nombre} fue el técnico encargado.`)
        } else {
            console.log("El telefono aún no ha sido diagnosticado.")
        }
    }
}

class Tecnicos {
    constructor(nombre,experiencia,...especializaciones){
        this.nombre = nombre;
        this.experiencia = experiencia;
        this.especializaciones = especializaciones;
    }

    static añadir_tecnico(nombre,...especializaciones){
        const tec = new Tecnicos(nombre,...especializaciones);
        return tec;
    }

    describir(){
        console.log(`${this.nombre} trabajó durante ${this.experiencia} años y tiene las siguientes especializaciones: ${this.especializaciones}`)
    }

    verificar_especializacion(marca){
        let match = [];
        for (let i = 0; i < this.especializaciones.length; i++) {
            const e = this.especializaciones[i];
            if (e == marca){
                match.push(e)
            }
        }
        return match;
    }
}