function receivesAFunction(dogs) {
    const siberianHusky = dogs;
    dogs();
}

function returnsANamedFunction() {
    let dog = function dog(){};

    return dog;
}

function returnsAnAnonymousFunction() {
    return function(){};
}
