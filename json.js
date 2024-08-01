// const user = {
//     id: 245,
//     name: 'Masud',
//     friendsAge: [12, 45, 56],
//     friends: ['jamal', 'kamal', 'samal']
// };
// const userJSON = JSON.stringify(user);
// console.log(userJSON);   //     {"id":245,"name":"Masud"}
// const userFromJSON = JSON.parse(userJSON);
// console.log(userFromJSON); //   { id: 245, name: 'Masud' }

// const demoFuction = (data) => {
//     const maping = data.map(user => user.name);
//     for (let a = 0; a < maping.length; a++) {
//         const userName = maping[a];
//         let li = document.createElement('li');
//         li.appendChild(document.createTextNode(userName));
//         demo.appendChild(li);
//     }
// }


// document.getElementById('submit').addEventListener('click', (event) => {
//     let titleText = document.getElementById('title').value;
//     let bodyContent = document.getElementById('body').value;
//     let post = {
//         username: titleText,
//         body: bodyContent,
//         id: 1,
//     }
//     serverDataPost(post);
// })

// const serverDataPost = (post) => {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(post),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => response.json())
//         .then((json) => console.log(json));
// }


// document.getElementById('submit').addEventListener('click', (event)=>{

// })

document.getElementById('submit').addEventListener('click', (event) => {
    const titleText = document.getElementById('title').value;
    const bodyText = document.getElementById('body').value;
    const post = {
        title: titleText,
        body: bodyText,
        userId: 1
    }
    fuction(post)
})


const fuction = (post) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}