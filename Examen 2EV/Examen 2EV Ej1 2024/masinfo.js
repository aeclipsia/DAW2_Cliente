fetch("pokemon.txt")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al obtener el archivo");
    }
    // alert(response.text())
    return response.text();
  })
  .then((data) => {
    $("#principal").empty().append(data);
  })
  .catch((error) => {
    $("#principal").empty().append(error);
  });
$("#uno").removeAttr("onclick");
