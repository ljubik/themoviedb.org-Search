var urlApi = "https://api.themoviedb.org/3/search/movie?";
var apiKey = "api_key=c2406e33bae3c04a8fdebb618c81ede7";
var total_paginas = "";

$(document).ready(function() {
  urlApi = urlApi + apiKey;
  cargarTabla(urlApi, 1);
  $("#flecha-izda").addClass("oculto");
});
