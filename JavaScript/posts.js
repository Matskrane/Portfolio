const url = "https://www.matskrane.no/wp-json/wp/v2/posts?per_page=3";
const postHTML = document.querySelector(".blogposts");


async function getPosts() {
    try {
        const response = await fetch(url);
        const getPosts = await response.json();
        listPosts(getPosts);
        console.log(getPosts);
    }

    catch(error) {
        console.log(error);
    }
}

getPosts();


function listPosts(posts){
    posts.forEach(function(post){
        postHTML.innerHTML += `
        
<div class="posts">
    <a href="specificpost.html?id=${post.id}">
        <h3>${post.title.rendered}</h3>
    </a>
    <div class="video"> ${post.content.rendered} </div>
</div>
       
        `;
    })

}