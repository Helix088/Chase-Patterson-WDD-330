// const cachedPokemon = {};
// const url = `https://pokeapi.co/api/v2/pokemon/`;

// async function apiFetch(url) {
//   const results = await fetch(url);
//   const data = await results.json();
//   return data;
// };

// function getPokeInfo(url) {
//   apiFetch(url);
//   // data.results.map((data, index) => ({
//   //   name: data.name,
//   //   id: index + 1,
//   //   image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
//   //     index + 1
//   //   }.png`,
//   // }));
// }

// function nextPrev() {
//   const next = document.getElementById("next");
//   next.onclick = () => {
//     showPokemon(data.next);
//   };
//   // if (data.next) {

//   // }
//   const prev = document.getElementById("prev");
//   prev.onclick = () => {
//     showPokemon(data.previous);
//   };
//   // if (data.previous) {

//   // }
// }

// const showPokemon = (pokemon) => {
//   const pokemonHTMLString = pokemon.map(
//       (pokeman) =>
//         `
//     <li class="card" onclick="selectPokemon(${pokeman.id})">
//         <img class="card-image" src="${pokeman.image}"/>
//         <div class="circle"></div>
//         <div class="circletwo"></div>
//         <div class="circlethree"></div>
//         <div class="line"></div>
//         <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
//         </a>
//     </li>
//         `
//     )
//     .join("");
//   pokemonList.innerHTML = pokemonHTMLString;
// };

// const selectPokemon = async (id) => {
//   if (!cachedPokemon[id]) {
//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//     const res = await fetch(url);
//     const pokeman = await res.json();
//     cachedPokemon[id] = pokeman;
//     displayPokemanPopup(pokeman);
//   } else {
//     displayPokemanPopup(cachedPokemon[id]);
//   }
// };

// const displayPokemanPopup = (pokeman) => {
//   const type = pokeman.types.map((type) => type.type.name).join(", ");
//   const htmlString = `
//         <div class="popup">
//             <button id="closeBtn" onclick="closePopup()">Close</button>
//             <div class="card">
//                 <img class="card-image" src="${pokeman.sprites["front_default"]}"/>
//                 <h2 class="card-title">${pokeman.name}</h2>
//                 <p>Type: <small class="type">${type}</small> | Height: ${pokeman.height} | Weight: ${pokeman.weight}</p>
//             </div>
//         </div>
//     `;
//   pokemonList.innerHTML = htmlString + pokemonList.innerHTML;
// };

// const closePopup = () => {
//   const popup = document.querySelector(".popup");
//   popup.parentElement.removeChild(popup);
// };

// apiFetch();
async function apiFetch(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

async function getPokemon(url, offset) {
  const data = await apiFetch(url);
  console.log(data);
  const next = document.getElementById("next");
  next.onclick = () => {
    if (offset > data.count) {
      return;
    } else {
      renderPokemonList(data.next);
    }
  };
  const prev = document.getElementById("prev");
  prev.onclick = () => {
    if(offset == 0) {
      return;
    } else {
      renderPokemonList(data.previous);
    }
  };
  const pokemon = data.results.map((data, index) => ({
    name: data.name,
    id: index + parseInt(offset) + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${
      index + parseInt(offset) + 1
    }.png`,
  }));
  return pokemon;
}

async function renderPokemonList(url) {
  const pokemonList = document.getElementById("pokemonlist");
  const offset = new URL(url).searchParams
      .toString()
      .split("&")
      .reduce((previous, current) => {
        const [key, value] = current.split("=");
        previous[key] = value;
        return previous;
      }, {});
  const pokeList = await getPokemon(url, offset.offset);
  console.log(pokeList);
  pokemonList.innerHTML = "";
  pokeList.forEach(function (pokeman) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
    <li class="card" onclick="selectPokemon(${pokeman.id})">
        <img class="card-image" src="${pokeman.image}"/>
        <div class="circle"></div>
        <div class="circletwo"></div>
        <div class="circlethree"></div>
        <div class="line"></div>
        <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
        </a>
    </li>
    `;
    pokemonList.appendChild(listItem);
  });
}

renderPokemonList("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=21");
