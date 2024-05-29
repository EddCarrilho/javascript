/**
 * APP flex
 * @author Eduardo Carrilho
 */

let etanol, gasolina

function calcular() {
    etanol = Number(frmFlex.txtEtanol.value)
    gasolina = Number(frmFlex.txtGasolina.value)
    //validação de campos obrigatórios
    if (etanol == 0 || gasolina == 0) {
        alert("Preencha todos os campos!")
        document.getElementById('status').src = "./img/flex.png"
        return
    }

    //console.log(etanol)
    //console.log(gasolina)
    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').src = "./img/etanol.png"
    } else {
        document.getElementById('status').src = "./img/gasolina.png"
    }
}

function limpa() {
    document.getElementById('status').src = "./img/flex.png"
}