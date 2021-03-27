const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

// Question 1
const cat = {
  complain: function () {
    console.log("Meow!");
  },
};
cat.complain();

// Question 2
const heading = document.querySelector("h3");
heading.innerHTML = `<h3> Updated </h3>`;
console.log(heading);

// Question 3
heading.style.fontSize = "20em";

// Question 4
heading.classList.add("subheading");
console.log(heading);

// Question 5
const paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

// Question 6
const resultContianer = document.querySelector(".results");
resultContianer.innerHTML = `<p> New paragraph </p>`;
resultContianer.style.backgroundColor = "yellow";

// Question 7
 function displayList(list)
for (let i = 0; i < list.length; i++){
 console.log(list[i].name);
}
displayList(cats)

// Question 8 
const container = document.querySelector(".cat-container");
let html = "";
function createCats(cats) { 
for (let i = 0; i < cats.length; i++) {
   let age = "Age unknown";
    if (cats[i].age) {
        age = cats[i].age;
    }
    html += `<div><h5> ${cats[i].name}</h5></div>
             <div><p>Age: ${age} </p></div>`;
   console.log(html);
}
return html;
}   
container.innerHTML = createCats(cats);
