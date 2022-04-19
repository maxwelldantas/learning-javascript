function filtraPares(arr) {
    return arr.filter(callbackPar);
}

function filtraImpares(arr) {
    return arr.filter(callbackImpar);
}

function filtraUser(arr) {
    return arr.filter(callbackUser);
}

function callbackPar(item) {
    return item % 2 === 0;
}

function callbackImpar(item) {
    return item % 2 !== 0;
}

function callbackUser(item) {
    return item === 'User';
}

const meuArrayNumeros = [9, 10, 23, 83, 84, 56, 489, 560]

const meuArrayString = ['Admin', 'User', 'Server', 'Staff', 'Owner']

console.log(filtraPares(meuArrayNumeros));
console.log(filtraImpares(meuArrayNumeros));
console.log(filtraUser(meuArrayString));
