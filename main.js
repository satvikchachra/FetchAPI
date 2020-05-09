const getText = () => {
    fetch('sample.txt')
        .then((res) => {
            // console.log(res.text()); // for txt file
            // console.log(res.json()); // for JSON file
            return res.text();
        })
        .then((data) => {
            // console.log(data);
            let output = `<div class="mb-4">${data}</div>`;
            document.querySelector('#output').innerHTML = output;
        })
        .catch((err) => console.log(err));

};

const getUsers = () => {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2 class="mb-4">Users</h2>`;
            data.forEach((element) => {
                output += `<ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${element.id}</li>
                    <li class="list-group-item">Name: ${element.name}</li>
                    <li class="list-group-item">Email: ${element.email}</li>
                </ul>`
            });

            document.querySelector('#output').innerHTML = output;
        })
        .catch((err) => console.log(err));
};

// GET REQUEST TO API
const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h2 class="mb-4">Posts </h2>`;
            data.forEach((post) => {
                output += `<div class="card card-body mb-3">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                </div>`
            });

            document.querySelector('#output').innerHTML = output;
        })
        .catch((err) => console.log(err));
};

// POST REQUEST TO API
const addPost = (e) => {
    e.preventDefault();
    let title = document.querySelector('#title').value;
    let body = document.querySelector('#body').value;
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(
            {
                title: title,
                body: body
            }
        )
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
};
document.querySelector('#getText').addEventListener('click', getText);
document.querySelector('#getUsers').addEventListener('click', getUsers);
document.querySelector('#getPosts').addEventListener('click', getPosts);
document.querySelector('#addPost').addEventListener('submit', addPost);