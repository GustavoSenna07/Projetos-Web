let currentURL = "https://pokeapi.co/api/v2/pokemon?limit=10";

let limit = 10;
function loadPage(numberPage) {
  const offset = (numberPage - 1) * limit;
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  carregarPokemons(url)
}

function carregarPokemons(url) {
  $("#lista").html(""); // limpa a tabela

  $.getJSON(url, (response) => {
    // Atualiza os botões
    $("#prevBtn").prop("disabled", !response.previous);
    $("#nextBtn").prop("disabled", !response.next);

    for (let m of response.results) {
      $.getJSON(m.url, (details) => {
        const linha = `
          <tr>
            <td><img src="${details.sprites.front_default}" alt="${m.name}" style="width: 60px;"></td>
            <td>${m.name}</td>
            <td>${details.id}</td>
            <td>${details.height / 10} m</td>
            <td>${details.weight / 10} kg</td>
            <td>${details.species.name}</td>
          </tr>
        `;
        $("#lista").append(linha);
      });
    }

    // Eventos dos botões
    $("#prevBtn").off("click").click(() => carregarPokemons(response.previous));
    $("#nextBtn").off("click").click(() => carregarPokemons(response.next));

    $("#btn-1").off("click").click(() => loadPage(1));
    $("#btn-2").off("click").click(() => loadPage(2));
    $("#btn-3").off("click").click(() => loadPage(3));
    $("#btn-4").off("click").click(() => loadPage(4));
    $("#btn-5").off("click").click(() => loadPage(5));
    $("#btn-6").off("click").click(() => loadPage(6));
    $("#btn-7").off("click").click(() => loadPage(7));
    $("#btn-8").off("click").click(() => loadPage(8));
    $("#btn-9").off("click").click(() => loadPage(9));
    $("#btn-10").off("click").click(() => loadPage(10));
    $("#btn-11").off("click").click(() => loadPage(11));
    $("#btn-12").off("click").click(() => loadPage(12));
    
  });
}

// Carrega a primeira página
carregarPokemons(currentURL);



