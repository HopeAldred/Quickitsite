const url = "https://quickit-ba88.restdb.io/rest/smallarticles?max=3";

const options = {
  headers: {
    "x-apikey": "61bb1e0c98cf0d3f741b900f",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // console.log(data)
    handleData(data);
  })
  .catch((e) => {
    console.error("An error occured:", e.message);
  });

function handleData(smallarticles) {
  smallarticles.forEach((smallarticle, index) => {
    // console.log(smallarticle);//
    // 1. make a template
    // 2. grab it
    const template = document.querySelector("template").content;

    // 3. clone it
    const clone = template.cloneNode(true);
    // 4. populate with data
    clone.querySelector(".righth1").textContent = smallarticle.header;
    clone.querySelector(".rightp").textContent = smallarticle.description;
    clone.querySelector(".imgbox").src = smallarticle.img_url;
    // 5. appent to something in the DOM
    if (index === 0) {
      const mainEl = document.querySelector(".howitworks");

      mainEl.appendChild(clone);
    } else {
      const mainEl = document.querySelector(".info-template2");

      mainEl.appendChild(clone);
    }
  });
}

var menu = document.getElementById("menu");
var nav = document.getElementById("navigation");
var exit = document.getElementById("exit");

menu.addEventListener("click", function (e) {
  nav.classList.add("nav-transition");
  e.preventDefault();
});

exit.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
  e.preventDefault();
});

nav.addEventListener("click", function (e) {
  nav.classList.remove("nav-transition");
});

function openNav() {
  document.getElementById("slideNav").style.width = "1000px";
}

function closeNav() {
  document.getElementById("slideNav").style.width = "0";
}
