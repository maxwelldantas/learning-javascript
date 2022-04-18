function validaArray(arr, num) {
    try {
        if (!arr && !num)
            throw new ReferenceError("Envie os parâmetros!");

        if (typeof arr !== 'object')
            throw new TypeError("Arr precisa ser do tipo object!");

        if (typeof num !== 'number')
            throw new TypeError("Num precisa ser do tipo number!");

        if (!arr.lenght !== num)
            throw new RangeError("Tamanho inválido!");

        return arr;
    } catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este erro é um ReferenceError!")
            console.log(e.stack)
        } else if (e instanceof TypeError) {
            console.log("Este erro é um TypeError!")
            console.log(e.stack)
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
            console.log(e.stack)
        } else {
            console.log("Tipo de erro não esperado: " + e.stack)
        }
    }
}

console.log(validaArray());
console.log(validaArray([], "a"));
console.log(validaArray(1, "a"));
console.log(validaArray([5], 5));
