
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);
const url = "https://quickit-e277.restdb.io/rest/blog-page/" +id;

const options = {
    headers: {
        "x-apikey": "61b8a82386e3467b41d8e06d",
    },
};

fetch(url, options)
.then(response => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
})
.then(data => {
    //console.log(data);
    handleData(data);
})

function handleData(blog){
        console.log(blog);
        document.querySelector(".blog-header").textContent = blog.header;
        document.querySelector(".blog-date").textContent = blog.date;
        document.querySelector(".blog-long-text").textContent = blog.textLong;
        document.querySelector(".blog-img").src = blog.img_url;
}

var menu = document.getElementById('menu');
var nav = document.getElementById('navigation');
var exit = document.getElementById('exit');

menu.addEventListener('click', function (e) {
    nav.classList.add('nav-transition');
    e.preventDefault();
});

exit.addEventListener('click', function (e) {
    nav.classList.remove('nav-transition');
    e.preventDefault();
});

nav.addEventListener('click', function (e) {
    nav.classList.remove('nav-transition');
});

function openNav() {
    document.getElementById("slideNav").style.width = "1000px";
}

function closeNav() {
    document.getElementById("slideNav").style.width = "0";
}