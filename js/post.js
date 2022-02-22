function loadpost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responnse => responnse.json())
        .then(data => displayPost(data))
}

function displayPost(data) {
    const posts = document.getElementById('posts')
    for (const post of data) {
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h3>Title ${post.title}</h3>
        <p>Description ${post.body}</p>
        `
        posts.appendChild(div)
    }
}
loadpost()