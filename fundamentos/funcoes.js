/**
 * Estudo das funções usando a sintaxe moderna da linguagem
 * @author Eduardo Carrilho
 */

console.clear()

// Função simples
function hello() {
    console.log("Hello function")
}
hello()
console.log(typeof hello)

// Função anônima (atribuídaclear)
const hello2 = function () {
    console.log("Hello function assigned")
}
hello2()
console.log(typeof hello2)

// Função anônima simplificada (Arrow function)
const hello3 = () => {
    console.log("Hello arrow function assigned")
}

hello3()
console.log(typeof hello3)

// Função anônima super simplificada (Arrow function)
const hello4 = _=> console.log("Hello arrow function assigned simplified")
hello4()
console.log(typeof hello4)

// Funções simples com retorno
function somarS(num1, num2) {
    return console.log(num1 + num2)
}

somarS(2,3)
console.log(typeof somarS)


// Funções anônima com retorno
let  somarA = function somarA(num1, num2) {
    return console.log(num1 + num2)
}

somarA(2,3)
console.log(somarA)
console.log(typeof somarS)

// Funções anônima simplificad (Arrow function) com retorno
let  somarAF = (num1, num2) => {
    return console.log(num1 + num2)
}

somarAF(2,3)
console.log(somarAF)

// Funções anônima simplificad (Arrow function) com retorno
let  somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(2,3)
console.log(somarAFS)