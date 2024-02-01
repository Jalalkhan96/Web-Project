function getcheez() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheez = '🧀';
            resolve(cheez);
        }, 3000);

    });
}

function makeDough(cheez) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheez +'🍩';
            resolve(dough);
            // reject('Bad Cheez');
        }, 3000);

    });
}

function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const Pizza = dough +'🍕';
            resolve(Pizza);
        }, 3000);

    });
}

async function orderPizza() {
    try {
        const cheez = await getcheez();
        console.log('Here is the Cheez', cheez);

        const dough = await makeDough();
        console.log('Here is the Dough', dough);

        const Pizza = await bakePizza();
        console.log('Here is the Pizaa', Pizza);
    }
    catch(err){
        console.log("Here is Error",err);
    }
    console.log('Process Ended Here! 💞');
}


orderPizza();