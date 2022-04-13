const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(array) {
    const meuSet = new Set(array);

    return [...meuSet];
}

console.log(valoresUnicos(meuArray));
