nombre = document.getElementById("nombre");
apellido = document.getElementById("apellidos");
yearNac = document.getElementById("anoNacimiento");
yearEntry = document.getElementById("anoEntrada");
yearHoy = new Date().getFullYear();

function validarFormulario() {
  if (validarNull(nombre) || validarNull(apellido) || validarNull(yearNac) || validarNull(yearEntry))
    return;

  if (validarLength(nombre) || validarLength(apellido))
    return;

  if (validarYear(yearNac) || validarYear(yearEntry))
    return;

  if (yearEntry.value<2000) {
    alert("La empresa no estaba abierta en ese año.")
  }
}

function validarNull(x) {
  if (x.value.trim() == "") {
    alert(x.id + " vacio");
    return true;
  }
  return false;
}

function validarLength(x) {
  if (x.value.length < 3) {
    alert(x.id + " debe tener al menos 3 caracteres");
    return true;
  }
  return false;
}

function validarYear(x) {
    if (parseInt(x.value) != x.value){
        alert(x.id + " debe ser un número entero");
        return true;
    }
 
    if (Number(x.value)>Number(yearHoy)){
        alert(x.id + " debe ser un año anterior a la de hoy");
        return true;
    }

    if (yearHoy - x.value < 18 || yearHoy - x.value > 65){
        alert(x.id + " debe tener más de 18 años y menos de 65 años");
        return true;
    }

    return false;
}