const pokemonList = document.getElementById("pokemonlist");
const cachedPokemon = {};

const apiFetch = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21`;
  const results = await fetch(url);
  const data = await results.json();
  console.log(data);
  if (data.next) {
    const next = document.getElementById("next");
    next.onclick = () => {
      showPokemon(data.next);
    };
  }
  if (data.previous) {
    const prev = document.getElementById("prev");
    prev.onclick = () => {
      showPokemon(data.previous);
    };
  }
  const pokemon = data.results.map((data, index) => ({
    name: data.name,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
      index + 1
    }.png`,
  }));
  showPokemon(pokemon);
};

const showPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) =>
        `
    <li class="card" onclick="selectPokemon(${pokeman.id})">
        <img class="card-image" src="${pokeman.image}"/>
        <div class="circle"></div>
        <div class="circletwo"></div>
        <div class="circlethree"></div>
        <div class="line"></div>
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        </a>
    </li>
        `
    )
    .join("");
  pokemonList.innerHTML = pokemonHTMLString;
};

const selectPokemon = async (id) => {
  if (!cachedPokemon[id]) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    cachedPokemon[id] = pokeman;
    displayPokemanPopup(pokeman);
  } else {
    displayPokemanPopup(cachedPokemon[id]);
  }
};

const displayPokemanPopup = (pokeman) => {
  const type = pokeman.types.map((type) => type.type.name).join(", ");
  const htmlString = `
        <div class="popup">
            <button id="closeBtn" onclick="closePopup()">Close</button>
            <div class="card">
                <img class="card-image" src="${pokeman.sprites["front_default"]}"/>
                <h2 class="card-title">${pokeman.name}</h2>
                <p>Type: <small class="type">${type}</small> | Height: ${pokeman.height} | Weight: ${pokeman.weight}</p>
            </div>
        </div>
    `;
  pokemonList.innerHTML = htmlString + pokemonList.innerHTML;
};

const closePopup = () => {
  const popup = document.querySelector(".popup");
  popup.parentElement.removeChild(popup);
};

apiFetch();

// async function apiFetch(url) {
//  return fetch(url)
//    .then(function (response) {
//      if (!response.ok) {
//        throw Error(response.statusText);
//      } else {
//        return response.json();
//      }
//    })
//    .catch(function (error) {
//      console.log(error);
//    });
// }

// function getPokemon(url) {
//     return apiFetch();
// }

// function renderPokemonList(pokemons, pokemonListElement) {
//   const pokeList = pokemonListElement;
//   pokeList.innerHTML = "";
//   pokemons.forEach(function (pokemon) {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = `
//     <img src="${pokemon.url} + /${pokemon.name} + /${pokemon.image}"></img>
//     <a href="${pokemon.url}" class="poke-link">${pokemon.name}</a>
//     `;
//     listItem.addEventListener("click", function (event) {
//       event.preventDefault();
//       getPokemonDetails(pokemon.url);
//     });
//     pokeList.appendChild(listItem);
//   });
// }

// function renderPokemonDetails(pokeData) {
//   console.log(pokeData);
// }

// function showPokemon(
// url = "https://pokeapi.co/api/v2/pokemon/"
// ) {
// getPokemon(url).then(function (data) {
//   console.log(data);
//   const results = data.results;
//   const pokemonListElement = document.getElementById("pokemonlist");
//   renderPokemonList(pokemon, pokemonListElement);
//   if (data.next) {
//     const next = document.getElementById("next");
//     next.onclick = () => {
//       showPokemon(data.next);
//     };
//   }
//   if (data.previous) {
//     const prev = document.getElementById("prev");
//     prev.onclick = () => {
//       showPokemon(data.previous);
//     };
//   }
// });
// }

// function getPokemonDetails(url) {
//   // apiFetch(url);
//   getPokemon(url).then(function (data) {
//     renderPokemonDetails(data);
//   });
// }

// showPokemon();
