/**
 * @author Eduardo Carrilho
 */

// variáveis
let total,desconto,valor,resultado1,calculo1,calculo2,calculo3


function calcular() {
    total = Number(frmPdv.txtTotal.value)
    desconto = Number(frmPdv.txtPorcentagem.value)
    calculo1 = desconto / 100
    resultado1 = total * calculo1 
    calculo2 = total - resultado1
    frmPdv.txtDesconto.value = `R$ ${resultado1.toFixed(2)}`
    frmPdv.txtTotalDesconto.value = `R$ ${calculo2.toFixed(2)}`
}

function calcularTroco() {
    valor = Number(frmPdv.txtValorPago.value)
    calculo3 = valor - calculo2
    frmPdv.txtTroco.value = `R$ ${calculo3.toFixed(2)}`
}