function generarCarnet() {
    let nombres = document.getElementById("inputNombre").value;
    let apellidos = document.getElementById("inputApellido").value;
    let edad = document.getElementById("inputEdad").value;
    let tipoSangre = document.getElementById("inputSangre").value;
    let rhSangre = document.getElementById("inputRh").value;
    let telefono = document.getElementById("inputTelefono").value;

    alert(`Carnet Generado para ${nombres} ${apellidos} con edad de ${edad}, tipo de sangre ${tipoSangre}${rhSangre}, y numero de contacto: ${telefono}`);
}