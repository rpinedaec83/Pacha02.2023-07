class Personas{
    constructor(nombres, apellido_paterno, apellido_materno, tipo_documento, numero_documento, sexo, direccion){
        this.nombres = nombres,
        this.apellido_paterno = apellido_paterno,
        this.apellido_materno = apellido_materno,
        this.tipo_documento = tipo_documento,
        this.numero_documento = numero_documento,
        this.sexo=sexo,
        this.direccion = direccion
    }
}

class Cliente extends Personas{
    constructor(idCliente,nombres, apellido_paterno, apellido_materno, tipo_documento, numero_documento, sexo, direccion){
        super(nombres, apellido_paterno, apellido_materno, tipo_documento, numero_documento, sexo, direccion);
        this.idCliente = idCliente
    }
}

const mi_primer_cliente = new Cliente(1,"Roberto David","Pineda","Lopez","DNI","001575291","Masculino","Lima")



export{ mi_primer_cliente};

