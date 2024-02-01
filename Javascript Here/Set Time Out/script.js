// console.log('hello');

// setTimeout(function() {
//     console.log('This will excute letter :');
// }, 3000);

// console.log('world');

// console.log('Three');

function getcheez(callback) {
    setTimeout(() => {
        const cheez = '🧀';
        console.log('Here is the cheez', cheez);
        callback(cheez);
    }, 3000);
}

function makeDough(cheez,callback) {
    setTimeout(() => {
        const dough = cheez + '🍩';
        console.log('Here is the Dough', dough);
        callback(dough);

    }, 3000);
}

function bakePizza(dough,callback) {
    setTimeout(() => {
        const pizza = dough + '🍕';
        console.log('Here is the Pizza', pizza);
        callback(pizza);
    }, 3000);
}

getcheez((cheez) => {
    makeDough(cheez, (dough) => {
        bakePizza(dough,(pizza)=>{
console.log('Got My Pizza ', pizza);
        });
    });
});

//Pizza -> dough -> cheez


