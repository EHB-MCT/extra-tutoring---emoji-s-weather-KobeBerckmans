"use strict";

let emojis = []

    

fetch('https://emoji-api.com/emojis?access_key=56eb0ffe677eef8c5b47a9bf015d4757a4a0cde3')
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
    console.log(data[199].character);
    document.querySelector('h1').innerHTML = data[199].character;
});
   


// TODO: use then to wait for the result
// TODO: load the json from the reponse
// TODO: in the final then function, process the data and add it to the HTML