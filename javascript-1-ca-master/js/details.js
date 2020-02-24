const newUrl = "https://rickandmortyapi.com/api/character/";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const paramId = params.get("id");

let id;
const detailUrl = `${newUrl}${paramId}`;

fetch(detailUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    details(json);
  })
  .catch(function() {
    document.search.href = "error.html" // This does not work, but it's exactly what is says on moodle so idk
  });

function details(json) {
  const image = document.querySelector(".details-image");
  image.src = json.image;
  image.alt = json.name;

  document.title = json.name;

  const h1 = document.querySelector("h1");
  h1.innerHTML = json.name;

  const status = document.querySelector("#status");
  status.innerHTML = json.status;

  const species = document.querySelector("#species");
  species.innerHTML = json.species;

  const origin = document.querySelector("#origin");
  origin.innerHTML = json.origin.name;

  const location = document.querySelector("#location");
  location.innerHTML = json.location.name;
}
