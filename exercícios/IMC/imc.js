/**
 * Cálculo do IMC
 * @author Eduardo Carrilho
 */

// variáveis
let altura,peso,calculo,resultado


function calcular() {
    altura = Number(frmIMC.txtAltura.value)
    peso = Number(frmIMC.txtPeso.value)
    calculo = peso / altura
    resultado = calculo / altura
    frmIMC.txtIMC.value = resultado.toFixed(2)
}