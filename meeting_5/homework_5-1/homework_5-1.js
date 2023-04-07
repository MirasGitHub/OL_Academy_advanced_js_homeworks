//thenable
// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {
//     return response.json();
// })
// .then(data => {
//     data.forEach(user => {
//         console.log(user);
//     })
// })

// console.log(users);


//Async/ Await

// const myUsers = {
//     userList: []
// }

// const myFunction = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
    
//     return jsonUserData;
// }

// myFunction();

// const anotherFunction = async () => {
//     const data =  await myFunction();
//     myUsers.userList = data;
//     console.log(myUsers.userList);
// }

// anotherFunction();
// console.log(myUsers.userList);

// const getAllUserEmails = async () => {

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const jsonUserData = await response.json();
    
//     const userEmailArray = jsonUserData.map(user => {
//         return user.email;
//     });

    
//     postToWebPage (userEmailArray);
// }

// const postToWebPage = (data) => {
//     console.log(data);
    
// }

// getAllUserEmails();


// const getDadJoke = async () => {

//     const response = await fetch("https://icanhazdadjoke.com/", {
//         method: "GET",
//         headers: {
//             Accept: "application/json"
//         }
//     });
//     const jsonJokeData = await response.json();
    
//     console.log(jsonJokeData);
// }

// getDadJoke();





// const jokeObject = {
//     id: '3LRCIJY82wc',
//     joke: 'How many South Americans does it take to change a lightbulb? A Brazilian'
// }

// const postData = async (jokeObj) => {

//     const response = await fetch("https://httpbin.org/post", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(jokeObj)
//     });

//     const jsonResponse = await response.json();
    
//     console.log(jsonResponse);
// }
// postData();





// const requestJoke = async (firstName, lastName) => {

//     const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);

//     const jsonResponse = await response.json();
    
//     console.log(jsonResponse.value.joke);
// }
// requestJoke("Clint", "Eastwood");



//abstartc into functions

// maybe from a form

// const getDataFromForm = () => {
//     const requestObj = {
//         firstName: "Bruce",
//         lastName: "Lee",
//         categories: ["nerdy"]
//     };

//     return requestObj;
// }

// const buildRequestUrl = (requestData) => {
//     return request `https://api.chucknorris.io/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
// }

// const requestJoke = async (url) => {

//         const response = await fetch(url);
    
//         const jsonResponse = await response.json();
//         const joke = jsonResponse.value.joke
        
//         postJokeToPage(joke);
//     }

//     const postJokeToPage = (joke) => {
//         console.log(joke);
//     }


//     //Procedural "workflow" function

//     const processJokeRequest = async () => {
//         const requestData = getDataFromForm();
//         const requestUrl = buildRequestUrl(requestData);
//         await requestJoke(requestUrl);
//         console.log("Finished");
//     }

//     processJokeRequest();
'use strict';

//homework-1 using Callbacks

console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};


function loginUser(email, password, callback) {
    
    setTimeout( 
        () => {
            console.log(`Now we have the data of user:`, email);
            callback({ userEmail: email });  
        }, 3000);

    
}

function getUserVideos(email, callback) {
    setTimeout( () => { 
           callback(usersDB[email]); 
        }, 2000)
}

function videoDetails(video, callback) {
    setTimeout(() => {
            callback(video.title);
        }, 2000)
}

const getPassedUsersFirstVideoTitle = (user) => {
    loginUser(user, 1234, (user) => {
        console.log("user:", user);
        getUserVideos(user.userEmail, (videos) => {
            console.log("videos: ", videos);
            videoDetails(videos[0], (title) => {
                console.log("title:", title);
            });
        });
    });
}


getPassedUsersFirstVideoTitle("user1@hw.js");


console.log("Finish");