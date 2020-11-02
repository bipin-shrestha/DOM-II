//Rocket When block is clicked, should go on top
const gameClick = document.querySelectorAll('.block');
console.log(gameClick);
gameClick.forEach(element => {
    element.addEventListener('click', () => {
        console.log(element.parentElement);
        element.parentElement.prepend(element);
    })
});
//when mouse is clicked should go right
// gameClick.forEach(element => {
//     element.addEventListener('mousedown', () => {
//         element.style.right = '100px';
//     });
// });