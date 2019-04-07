var urlApi = "https://api.themoviedb.org/3/search/movie?";
var apiKey = "api_key=c2406e33bae3c04a8fdebb618c81ede7";
var total_paginas = "";

$(document).ready(function() {
  urlApi = urlApi + apiKey;
  cargarTabla(urlApi, 1);
});

var cargarTabla = function(urlApiApiKey, numero) {
  urlApiApiKey += "&page=" + numero;
  $.get(urlApiApiKey, function(respuesta, estado) {
    if (estado === "success") {
      total_paginas = respuesta.total_pages;
      var Films = "<div>";

      $.each(respuesta.results, function(indice, elemento) {
        Films += "<div>";
        Films +=
          '<br class="title"><a href="">' + elemento.title + "</a></div>";
      });
    } else {
      Films = "<div><p>Фільми недоступні</p></div>";
    }
    document.getElementById("principal").innerHTML = Films + "</div>";
  });
};

$("#btnFind").click(function() {
  var busqueda = document.getElementById("busqueda").value;
  urlApiBusqueda =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=" +
    busqueda +
    "&language=en-US&api_key=c2406e33bae3c04a8fdebb618c81ede7";
  cargarTabla(urlApiBusqueda, 1);
});
