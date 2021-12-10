/*-------------------------------template script---------------------*/
const url = "https://quickit-e277.restdb.io/rest/blog-page?sort=date&dir=-1";

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

function handleData(quickit){
    quickit.forEach((blog, index) => {
        console.log(blog);
        const template = document.querySelector("#blog-template").content;   
        const clone = template.cloneNode(true);
        clone.querySelector(".blog-header").textContent = blog.header;
        clone.querySelector(".blog-date").textContent = blog.date;
        clone.querySelector(".blog-short-text").textContent = blog.textShort;
        clone.querySelector(".blog-img").src = blog.img_url;

        clone.querySelector(".blog-link").href = "single-blog.html?id=" + blog._id;
        
        if (index === 0) {
            const mainEl = document.querySelector("#main-blog");
        mainEl.appendChild(clone);
        } else {
            const mainEl = document.querySelector("#latest-blog");
        mainEl.appendChild(clone);
        }

        
    });
}