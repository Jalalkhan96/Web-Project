// const box1 =document.getElementById('box-1');
// box1.addEventListener('click', ()=>{
//     console.log('Clicked By Event');
// })

// box1.addEventListener('click', ()=>{
//     console.log('click By Event :');
// })

// const box1 =document.getElementById('box-1');
// box1.addEventListener('mousemove', (e)=>{
//     console.log('Clicked By Event', e.clientX, e.clientY );
// })

// box1.addEventListener('click', ()=>{
//     console.log('click By Event :');
// })

// const nameInput =document.getElementById('nameInput');
// nameInput.addEventListener('keydown', (e)=>{
//     console.log('key', e.key);
// })

// nameInput.addEventListener('focus', (e)=>{
// console.log('key',e);
// })


const box1 =document.getElementById('box-1');
box1.addEventListener('click', ()=>{
    console.log('Clicked On Box');
})


const container =document.getElementById('container');
box1.addEventListener('click', ()=>{
    console.log('Clicked On Container');
}, true)

