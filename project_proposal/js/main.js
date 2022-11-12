const animalList = document.getElementById("animals");

async function apiFetch(url) {
    return fetch(url)
        .then(function (response) {
            const data = response.json();
            return data;
        });
}

function getAnimals(url) {
    return apiFetch(url);
}

function getAnimalDetails(url) {
    apiFetch(url);
}

function createAnimalList(data) {
    animalList.innerHTML = "";
    data.forEach((animal) => {
        const animalLi = document.createElement("li");
        animalLi.setAttribute("id", `&{animal.name}`);
        animalLi.innerHTML = `<a href="#"><img src="${animal.image_link}" class="animal-img">${animal.name}</img></a>`;
        getAnimalDetails(animal.url);
        animalList.append(animalLi);
    });
}

function renderList(
  url = "https://zoo-animal-api.herokuapp.com/animals/rand/6"
) {
  getAnimals(url).then(function (data) {
    console.log(data);
    createAnimalList(data);
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
  });
}

renderList();