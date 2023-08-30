document.addEventListener("DOMContentLoaded", function () {
    const serialInput = document.getElementById("serial");
    const imeiInput = document.getElementById("imei");
    const checkPhoneBtn = document.getElementById("checkPhoneBtn");
    const diagnosisForm = document.getElementById("diagnosisForm");
    const diagnosisInput = document.getElementById("diagnosis");
    const submitDiagnosisBtn = document.getElementById("submitDiagnosisBtn");
    const authorizationForm = document.getElementById("authorizationForm");
    const authorizeBtn = document.getElementById("authorizeBtn");
    const makePaymentBtn = document.getElementById("makePaymentBtn");
    const techForm = document.getElementById("techForm");
    const techSkillsInput = document.getElementById("techSkills");
    const assignTechBtn = document.getElementById("assignTechBtn");
    const partsForm = document.getElementById("partsForm");
    const partNameInput = document.getElementById("partName");
    const partBrandInput = document.getElementById("partBrand");
    const addPartBtn = document.getElementById("addPartBtn");
    const statusDiv = document.getElementById("status");
    const statusText = document.getElementById("statusText");

    class Telefono {
        constructor(numeroSerie, imei) {
            this.numeroSerie = numeroSerie;
            this.imei = imei;
            this.reportado = false;
        }
    }

    class Diagnostico {
        constructor(tecnico, descripcion) {
            this.tecnico = tecnico;
            this.descripcion = descripcion;
        }
    }

    class Reparacion {
        constructor() {
            this.diagnosticos = [];
            this.autorizacionUsuario = false;
            this.abonoRealizado = false;
            this.repuestos = [];
            this.estado = "En revisión";
        }

        agregarDiagnostico(diagnostico) {
            this.diagnosticos.push(diagnostico);
        }


        autorizarReparacion() {
            this.autorizacionUsuario = true;
        }

        realizarAbono() {
            this.abonoRealizado = true;
        }

        agregarRepuesto(repuesto) {
            this.repuestos.push(repuesto);
        }

        cambiarEstado(estado) {
            this.estado = estado;
        }
    }

    class Tecnico {
        constructor(nombre, skills) {
            this.nombre = nombre;
            this.skills = skills;
        }
    }

    class Repuesto {
        constructor(nombre, marca) {
            this.nombre = nombre;
            this.marca = marca;
        }
    }

    checkPhoneBtn.addEventListener("click", function () {
        const numeroSerie = serialInput.value;
        const imei = imeiInput.value;
        const telefono = new Telefono(numeroSerie, imei);
        showDiagnosisForm(telefono);
    });

    function showDiagnosisForm(telefono) {
        diagnosisForm.style.display = "block";
        checkPhoneBtn.disabled = true;

        submitDiagnosisBtn.addEventListener("click", function () {
            const descripcion = diagnosisInput.value;
            const tecnico = new Tecnico("Juan", ["Samsung", "Apple"]);
            const diagnostico = new Diagnostico(tecnico, descripcion);

            const reparacion = new Reparacion();
            reparacion.agregarDiagnostico(diagnostico);

            showAuthorizationForm(reparacion);
        });
    }

    function showAuthorizationForm(reparacion) {
        diagnosisForm.style.display = "none";
        authorizationForm.style.display = "block";

        authorizeBtn.addEventListener("click", function () {
            reparacion.autorizarReparacion();
            showTechForm(reparacion);
        });

        makePaymentBtn.addEventListener("click", function () {
            reparacion.realizarAbono();
            showTechForm(reparacion);
        });
    }

    function showTechForm(reparacion) {
        authorizationForm.style.display = "none";
        techForm.style.display = "block";

        assignTechBtn.addEventListener("click", function () {
            const techSkills = techSkillsInput.value;
            const tecnico = new Tecnico("Pedro", [techSkills]);
            reparacion.agregarDiagnostico(tecnico);

            showPartsForm(reparacion);
        });
    }

    function showPartsForm(reparacion) {
        techForm.style.display = "none";
        partsForm.style.display = "block";

        addPartBtn.addEventListener("click", function () {
            const partName = partNameInput.value;
            const partBrand = partBrandInput.value;
            const repuesto = new Repuesto(partName, partBrand);
            reparacion.agregarRepuesto(repuesto);

            finalizeRepair(reparacion);
        });
    }

    function finalizeRepair(reparacion) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Estado del Equipo: ${reparacion.estado}`,
            showConfirmButton: false,
            timer: 5000
        })
    }
});