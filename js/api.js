function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}
function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => userData(data))
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
}
function userData(data) {
    const ul = document.getElementById('users')
    for (const user of data) {
        const li = document.createElement('li')
        li.innerText = `Name: ${user.name} Email: ${user.email}`
        ul.appendChild(li)
        // console.log(user)
        // console.log(user.name)
        // console.log(user.email)
    }
}