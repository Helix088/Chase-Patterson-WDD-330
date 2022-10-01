const links = [
  {
    label: "Week 01",
    url: "/week01/index.html",
  },
  {
    label: "Week 02",
    url: "/week02/index.html",
  },
  {
    label: "Week 03",
    url: "/week03/index.html",
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