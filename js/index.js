// Your code goes here




//page load message
window.addEventListener('load', (event) => {
    console.log('Congratulations the Page is fully loaded');
});


//All the images effects when mouseover 
const imageEffect = document.querySelectorAll('img');
for (let i = 0; i < imageEffect.length; i++) {
    imageEffect[i].addEventListener('mouseover', () => {
        imageEffect[i].style.transform = 'scale(1.2)';
        imageEffect[i].style.transition = 'transform 2s';
    });
}
// All the images effects when mouseleave
const imageNormal = document.querySelectorAll('img');
for (let i = 0; i < imageNormal.length; i++) {
    imageNormal[i].addEventListener('mouseleave', () => {
        imageNormal[i].style.transform = 'scale(1)'
    });
}

//Click event on the paragraphs 
const clickParagraphs = document.querySelectorAll('p');
for (let i = 0; i < clickParagraphs.length; i++) {
    clickParagraphs[i].addEventListener('click', () => {
        clickParagraphs[i].style.backgroundColor = 'grey';
        clickParagraphs[i].style.color = 'white';
        clickParagraphs[i].style.border = '2px solid green';
    });
}
// doubleclick event to make paragraphs back to normal
const doubleClickPar = document.querySelectorAll('p');
doubleClickPar.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.color = 'black';
        element.style.backgroundColor = 'white';
        element.style.border = 'none';
    })
});

//Sign Me Up button get dblclick event
const buttonClick = document.getElementsByClassName('btn');
for (let i = 0; i < buttonClick.length; i++) {
    buttonClick[i].addEventListener('click', () => {
        buttonClick[i].style.backgroundColor = 'Black';
        buttonClick[i].style.color = 'crimson';
        buttonClick[i].style.border = '2px solid pink';
        buttonClick[i].style.padding = '10px';
        buttonClick[i].style.width = '12%';
        buttonClick[i].style.textAlign = 'center';
    });
}
//Stop from getting refresh on click in anchor tags pops alert instead
const navItem = document.querySelectorAll('a');
navItem.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        alert("Page won't be Refreshed. Sorry!!");
    });
});

// mouseover effect on the anchor Tags
const navBar = document.querySelectorAll('a');
console.log(navBar);
navBar.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'red';
        element.style.backgroundColor = 'Black';
        element.style.fontsize = '16px';
        element.style.textDecoration = 'none';
        element.style.padding = "10px";
        element.style.border = '2px solid skyblue';
        element.style.borderRadius = '8px'
        element.style.textAlign = 'center';
    });
});

//Keypress in the page gives you alert
const keyPressPage = document.querySelector('body');
keyPressPage.addEventListener('keypress', () => {
    alert("Keypressed without any reason");
});

// Adding effects on the h1
const headTitle = document.querySelector('h1');
headTitle.addEventListener('mouseover', () => {
    headTitle.style.color = 'crimson';
});

// Adding effects on the h2
const headTitle2 = document.querySelectorAll('h2');

headTitle2.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.color = 'Green';
    });
});


// drag event conducted in the image
const selectImage = document.querySelector('.content-destination img');
selectImage.addEventListener('drag', () => {
    selectImage.style.display = "none";
});
//drag  h2 pick your destination
const dragItem = document.querySelector('.content-destination h2');
dragItem.addEventListener('drag', () => {
    dragItem.style.display = 'none';
});