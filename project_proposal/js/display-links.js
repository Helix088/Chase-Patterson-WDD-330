function jsonFetch(data) {
    fetch(data)
    .then(response => {
        return response.json();
    }).then(displayLinks).then(data => {
        console.log(data)
    });
}


function displayLinks(data) {
    const links = document.getElementById("sponser-links");
    links.innerHTML = "";
    data.links.forEach((link) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = `
        <li>
            <a href="${link.link}" class="spons-link">${link.organization}</a>
        </li>
    `;
      links.appendChild(listItem);
    });
}

jsonFetch("../animal-links.json");

