/**
 *  Regra de 3
 *  @author Eduardo Carrilho
 */

// importação de pacote
const read = require('readline-sync')

// declaracão das variáveis
let x, y, valor

console.clear()
console.log("Regra de 3")
console.log("X% de Y = Valor")

// entrada de dados
x = read.question("Digite o valor de X: ")
y = read.question("Digite o valor de Y: ")

// processamento
valor = (x * y) / 100

// saída de dados
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)