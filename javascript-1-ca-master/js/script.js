const fetchUrl = "https://rickandmortyapi.com/api/character/";

fetch(fetchUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    characterInfo(json);
  })
  .catch(function() {
    document.location.href = "error.html"; // This does not work, but it's exactly what is says on moodle so idk
  });

function characterInfo(json) {
  const results = json.results;
  const div = document.querySelector(".row");

  let html = "";

  results.forEach(function(result) {
    let unknown = "Unknown";
    if (result.type) {
      unknown = result.type;
    }
    html += ` <div class="col-sm-6 col-md-4 col-lg-3">                
      <div class="card">
     
          <img class="image" src="${result.image}" alt="Character Name">
          <div class="details">
              <h4 class="name">${result.name}</h4>
              <p>${unknown}</p>    
              <p>Episode count: ${result.episode.length}</p>                                       
              <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
          </div>
      </div>
  </div>`;
  });
  div.innerHTML = html;
}
