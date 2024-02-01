const box1 = document.getElementById('box-1');

// box1.innerHTML = " <h1>Hello</h2> <p> Hello World </p>"

box1.style.backgroundColor = 'green';
box1.classList.add('round-border');

const boxes = document.getElementsByClassName('box');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].classList.add('round-border');
}

box1.classList.remove('round-border');

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].classList.remove('round-border');
// }

const newParagraph =document.createElement('p');

newParagraph.innerText= 'This Is Branded New Here';

newParagraph.classList.add('box');

const container = document.getElementById('aaa');

container.appendChild(newParagraph)














// const myBody = document.body;

// console.log(myBody);

// const box2 = document.getElementById('box-2');

// console.log(box2);  

// const divs = document.getElementsByTagName('p');

// console.log(divs);

// const diva = document.getElementsByTagName('div');

// console.log(diva);

// const boxes = document.getElementsByClassName('box');

// console.log(boxes);

// const random = document.querySelector('.container .random')

// console.log(random);