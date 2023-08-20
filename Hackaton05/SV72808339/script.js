class Telefonos {
    constructor(serie, imei, marca, modelo) {
        this.serie = serie;
        this.imei = imei;
        this.marca = marca;
        this.modelo = modelo;
        this.autorizacion = false;
        this.pago_parcial = false;

        this.diagnosticos = [];
    }

    static reg_series = [];
    static reg_imei = [];

    static crear_telefono(serie, imei, marca, modelo) {
        if (Telefonos.reg_series.includes(serie) || Telefonos.reg_imei.includes(imei)) {
            console.log("Este teléfono ya ha sido registrado.");
            return null;
        } else {
            const tel = new Telefonos(serie, imei, marca, modelo);
            Telefonos.reg_series.push(serie);
            Telefonos.reg_imei.push(imei);
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

    diagnosticar(diagnostico) {
        if (this.pago_parcial && this.autorizacion){
            if (!this.diagnosticos.includes(diagnostico)){
                this.diagnosticos.push(diagnostico)
                console.log("Diagnostico agregado: ",diagnostico)
            } else {
                console.log("Ya se ha registrado este diagnóstico con anterioridad")
            }
        } else {console.log("No se ha dado la autorización del usuario o el pago del 50%")}
    }

    

}

const telf_1 = Telefonos.crear_telefono("S21-123456", "123456789012345", "Samsung", "Galaxy S21");
console.log(telf_1);
const telf_2 = Telefonos.crear_telefono("IP13P-654321", "987654321098765", "Apple", "iPhone 13 Pro");
console.log(telf_2);
const telf_3 = Telefonos.crear_telefono("PX5-987654", "543210987654321", "Google", "Pixel 5");
console.log(telf_3);

telf_3.diagnosticar("Batería muerta")
console.log(telf_3.diagnosticos[0])


