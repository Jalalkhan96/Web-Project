const ticket = new Promise(function (resolve, reject) {
    const isBoarded = true;
    if (isBoarded) {
        resolve("You are not in the flight");
    } else {
        reject('Your Flight has been cancelled');
    }
});

ticket
    .then((data) => {
        console.log('Wohoo!', data);
    })
    .catch((data) => {
        console.log('Ohh No!', data);
    })
    .finally((data)=>{
        console.log('I will always be executed');
    });