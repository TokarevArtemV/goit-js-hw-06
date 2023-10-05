
const liCount = document.querySelector("#categories").children.length;
console.log(`Number of categories: ${liCount}`);
console.log("");

const liCategories = document.querySelectorAll('.item');

liCategories.forEach((elem, index, arr) => {
    console.log(`Categories: ${elem.querySelector("h2").textContent}`);
    console.log(`Elements: ${elem.querySelector('ul').children.length}`);
    (index !== arr.length-1) ? console.log("") : console.log();
})