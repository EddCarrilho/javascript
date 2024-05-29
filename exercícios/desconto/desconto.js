/**
 * Cálculo do VT
 * @author Eduardo Carrilho
 */

// variáveis
let salario, passagem, dias, resultado1, resultado2


function calcular() {
    salario = Number(frmDesconto.txtSalario.value)
    passagem = Number(frmDesconto.txtPassagem.value)
    dias = Number(frmDesconto.txtDias.value)
    resultado1 = salario * 0.06
    resultado2 = passagem * dias
    console.log("RESULTADOS:")
    frmDesconto.txtDesconto.value = resultado1
    frmDesconto.txtCusto.value = resultado2
    if (resultado2 >= resultado1) {
        frmDesconto.txtVAP.value = "SIM"
    } else {
        frmDesconto.txtVAP.value = "NÃO"
    }
}