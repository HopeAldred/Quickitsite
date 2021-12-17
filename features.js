const url = "https://quickit-ba88.restdb.io/rest/smallarticles";

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
  });

function handleData(smallarticles) {
  smallarticles.forEach((smallarticle, index) => {
    // console.log(smallarticle);//
    // 1. make a template
    // 2. grab it

    // if odd get right template
    if (index / 2 === 0) {
      const template = document.querySelector(".template-right").content;
      const clone = template.cloneNode(true);
      clone.querySelector(".righth1-right").textContent = smallarticle.header;
      clone.querySelector(".rightp-right").textContent =
        smallarticle.description;
      clone.querySelector(".custom-img").src = smallarticle.img_url;
      const mainEl = document.querySelector(".info-template-right");
      mainEl.appendChild(clone);
    } else {
      const template = document.querySelector(".template-left").content;
      const clone = template.cloneNode(true);
      clone.querySelector(".righth1-left").textContent = smallarticle.header;
      clone.querySelector(".rightp-left").textContent =
        smallarticle.description;
      clone.querySelector(".custom-img").src = smallarticle.img_url;
      const mainEl = document.querySelector(".info-template-left");
      mainEl.appendChild(clone);
    }
  });
}
// if even get left template
// fill correct data in template
// 4. populate with data
// append template to Selection
// REMEMBER Style correctly using parent class

// 3. clone it

// 5. appent to something in the DOM

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
