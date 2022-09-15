const links = [
  {
    label: "Week 01",
    url: "/week01/index.html",
  },
];

let orderedList = document.getElementById("tobLinks");

links.forEach(item => {
    let li = document.createElement("li");
    orderedList.appendChild(li);
    let a = document.createElement("a");
    a.textContent = item.label;
    a.href = item.url;
    li.appendChild(a);
});