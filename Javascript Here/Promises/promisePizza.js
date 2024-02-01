function getcheez() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheez = '🧀';
            console.log('Here is the Cheez', cheez);
            resolve(cheez);
        }, 3000);

    });
}

function makeDough(cheez) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheez + '🍩';
            console.log('Here is the Dough', dough);
            resolve(dough);
            // reject('Bad Cheez');
        }, 3000);

    });
}

function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Pizza = dough + '🍕';
            console.log('Here is the Pizaa', Pizza);
            resolve(Pizza);
        }, 3000);

    });
}

// async function orderPizza() {
//     try {
//         const cheez = await getcheez();
//         console.log('Here is the Cheez', cheez);

//         const dough = await makeDough();
//         console.log('Here is the Dough', dough);

//         const Pizza = await bakePizza();
//         console.log('Here is the Pizaa', Pizza);
//     }
//     catch(err){
//         console.log("Here is Error",err);
//     }
//     console.log('Process Ended Here! 💞');
// }


// orderPizza();


getcheez()
.then((cheez) => {
    console.log('Here is the Cheez',cheez);
    return makeDough(cheez);
})
.then((dough)=>{
    console.log('Here is the Dough',dough);
return bakePizza(dough);
})
.then((Pizza)=>{
    console.log('Here is the Pizaa',Pizza);

})
.catch((data)=>
{
    console.log("This error ",data,'occured');
})
.finally((data)=>{
    console.log("Next try :");
});