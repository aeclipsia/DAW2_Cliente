let size = document.getElementById("idtamaño");
let count = document.getElementsByName("cuantas");
let fries = document.getElementById("idpatatas");
let drinks = document.getElementById("idrefresco");
let misc = 0;
let amount = 0;
let radNull = true;
let total = 0;

function calcular() {
  total = 0;
  misc = 0;
  amount = 0;

  if (Number(size.value) == 0) {
    alert("Elige un tamaño");
    return;
  }

  count.forEach((x) => {
    if (x.checked == true) {
      radNull = false;
      amount = Number(x.value);
    }
  });

  //Sí radNull sigue siendo true, ningún radio button está marcado
  if (radNull == true) {
    alert("Debe elegir la cantidad");
    return;
  }

  if (fries.checked) {
    misc += 1;
  }

  if (drinks.checked) {
    misc += 1.5;
  }

  total = (Number(size.value) + misc) * amount;
  document.getElementById("idtotal").value = total;

  document.getElementById("premio").style.display = "block";
}

function verpremio() {
  zip = document.getElementById("idcodigo").value;

  if (zip == "28001" || zip == "28002") {
    alert("Enhorabuena!");
    total = total/2;
    document.getElementById("idtotal").value = total;
    document.getElementById("idcodigo").value = "";
    document.getElementById("premio").style.display = "none";
    return;
  }

  alert("Gracias!")
  document.getElementById("idcodigo").value = "";
  document.getElementById("premio").style.display = "none";
  return;
}
