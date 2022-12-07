// const pokemonList = document.getElementById("pokemon");
async function apiFetch(url) {
 return fetch(url)
   .then(function (response) {
     if (!response.ok) {
       throw Error(response.statusText);
     } else {
       return response.json();
     }
   })
   .catch(function (error) {
     console.log(error);
   });
}

function getPokemon(url) {
    return apiFetch(url);
}

function renderPokemonList(pokemons, pokemonListElement) {
  // pokemonList.innerHTML = "";
  //     data.results.forEach((pokemon) => {
  //         const pokemonLi = document.createElement("li");
  //         pokemonLi.setAttribute("id", `&{pokemon.name}`);
  //         pokemonLi.innerHTML = `<a href="${pokemon.url}" class="poke-link"><img src="${pokemon.sprites}" class="pokemon-img">${pokemon.name}</img></a>`;
  //         getPokemonDetails(pokemon.url);
  //         pokemonList.append(pokemonLi);
  //     });
  const pokeList = pokemonListElement.children[1];
  pokeList.innerHTML = "";
  pokemons.forEach(function (pokemon) {
    let listItem = document.createElement("tr");
    listItem.innerHTML = `
      <td><a href="${pokemon.url}" class="poke-link">${pokemon.name}</a></td>
      <td>${pokemon.url.sprites}</td>
      <td>${pokemon.url.types}</td>
    `;
    listItem.addEventListener("click", function (event) {
      event.preventDefault();
      getPokemonDetails(pokemon.url);
    });
    pokeList.appendChild(listItem);
  });
}

function renderPokemonDetails(pokeData) {
  console.log(pokeData);
}

function showPokemon(
  url = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=22"
) {
  getPokemon(url).then(function (data) {
    const results = data.results;
    console.log(results);
    const pokemonListElement = document.getElementById("pokemonlist");
    renderPokemonList(results, pokemonListElement);
    if (results.next) {
      const next = document.getElementById("next");
      next.onclick = () => {
        showPokemon(data.next);
      };
    }
    if (results.previous) {
      const prev = document.getElementById("previous");
      prev.onclick = () => {
        showPokemon(data.previous);
      };
    }
  });
}

function getPokemonDetails(url) {
  // apiFetch(url);
  getPokemon(url).then(function (data) {
    renderPokemonDetails(data);
  });
}

showPokemon();

//  getPokemon(url).then(function (data) {
//    console.log(data);
//    createPokemonList(data);
//    if (data.next) {
//      const next = document.getElementById("next");
//      next.onclick = () => {
//        renderList(data.next);
//      };
//    }
//    if (data.previous) {
//      const prev = document.getElementById("previous");
//      prev.onclick = () => {
//        renderList(data.previous);
//      };
//    }
//    // if (data.url) {
//    //   renderPokemon();
//    // }
//  });

// function createPokemonList(data) {
//     pokemonList.innerHTML = "";
//     data.results.forEach((pokemon) => {
//         const pokemonLi = document.createElement("li");
//         pokemonLi.setAttribute("id", `&{pokemon.name}`);
//         pokemonLi.innerHTML = `<a href="${pokemon.url}" class="poke-link"><img src="${pokemon.sprites}" class="pokemon-img">${pokemon.name}</img></a>`;
//         getPokemonDetails(pokemon.url);
//         pokemonList.append(pokemonLi);
//     });
// }

// renderList();
