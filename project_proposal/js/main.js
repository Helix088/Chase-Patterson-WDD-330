const pokemonList = document.getElementById("pokemon");

async function apiFetch(url) {
    return fetch(url)
        .then(function (response) {
            const data = response.json();
            return data;
        });
}

function getPokemon(url) {
    return apiFetch(url);
}

function getPokemonDetails(url) {
    apiFetch(url);
}

function createPokemonList(data) {
    pokemonList.innerHTML = "";
    data.results.forEach((pokemon) => {
        const pokemonLi = document.createElement("li");
        pokemonLi.setAttribute("id", `&{pokemon.name}`);
        pokemonLi.innerHTML = `<a href="${pokemon.url}" class="poke-link"><img src="${pokemon.sprites}" class="pokemon-img">${pokemon.name}</img></a>`;
        getPokemonDetails(pokemon.url);
        pokemonList.append(pokemonLi);
    });
}

function renderList(url = "https://pokeapi.co/api/v2/pokemon/") {
  getPokemon(url).then(function (data) {
    console.log(data);
    createPokemonList(data);
    if (data.next) {
      const next = document.getElementById("next");
      next.onclick = () => {
        renderList(data.next);
      };
    }
    if (data.previous) {
      const prev = document.getElementById("previous");
      prev.onclick = () => {
        renderList(data.previous);
      };
    }
    // if (data.url) {
    //   renderPokemon();
    // }
  });
}

renderList();