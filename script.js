function recommendMovies(){

const movies = {

Action:[
{name:"Avengers",img:"avengers.jpg",rating:"8.4"},
{name:"Batman",img:"batman.jpg",rating:"8.2"},
{name:"John Wick",img:"johnwick.jpg",rating:"7.9"}
],

Comedy:[
{name:"3 Idiots",img:"3idiots.jpg",rating:"8.4"},
{name:"Hangover",img:"hangover.jpg",rating:"7.7"},
{name:"Mr Bean",img:"mrbean.jpg",rating:"7.5"}
],

Romance:[
{name:"Titanic",img:"titanic.jpg",rating:"7.9"},
{name:"Notebook",img:"notebook.jpg",rating:"7.8"},
{name:"DDLJ",img:"ddlj.jpg",rating:"8.0"}
],

"Sci-Fi":[
{name:"Interstellar",img:"interstellar.jpg",rating:"8.7"},
{name:"Avatar",img:"avatar.jpg",rating:"7.9"},
{name:"Inception",img:"inception.jpg",rating:"8.8"}
],

Horror:[
{name:"Conjuring",img:"conjuring.jpg",rating:"7.5"},
{name:"Nun",img:"nun.jpg",rating:"5.3"},
{name:"Annabelle",img:"annabelle.jpg",rating:"5.4"}
],

Thriller:[
{name:"Shutter Island",img:"shutterisland.jpg",rating:"8.2"},
{name:"Gone Girl",img:"gonegirl.jpg",rating:"8.1"},
{name:"Joker",img:"joker.jpg",rating:"8.4"}
],

Adventure:[
{name:"Pirates of Caribbean",img:"pirates.jpg",rating:"8.1"},
{name:"Harry Potter",img:"harrypotter.jpg",rating:"7.9"},
{name:"Uncharted",img:"uncharted.jpg",rating:"6.3"}
]

};

let selected = document.querySelectorAll("input[type='checkbox']:checked");
let result = document.getElementById("result");

if(selected.length===0){
result.innerHTML = "<h2>Select Genres</h2>";
return;
}

let recommendations = [];

selected.forEach(item=>{
movies[item.value].forEach(movie=>{
recommendations.push(movie);
});
});

let output = "";

recommendations.forEach(movie=>{
output += `
<div class="card">
<img src="${movie.img}" alt="${movie.name}">
<h3>${movie.name}</h3>
<p class="rating">⭐ Rating: ${movie.rating}/10</p>
<p>Recommended for you</p>
</div>
`;
});

result.innerHTML = output;

}
