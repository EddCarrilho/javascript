/**
 * Cálculo da média de 4 notas
 * @author Eduardo Carrilho
 */

// variáveis
let nota1, nota2, nota3, nota4, media


function calcular() {
    //entrada de dados
    nota1 = Number(frmMedia.txtNota1.value)
    nota2 = Number(frmMedia.txtNota1.value)
    nota3 = Number(frmMedia.txtNota1.value)
    nota4 = Number(frmMedia.txtNota1.value)
    //processamento
    media = (nota1 + nota2 + nota3 + nota4) / 4
    //saída
    frmMedia.txtMedia.value = media.toFixed(1)
    if (media < 4){
        frmMedia.txtStatus.value = "REPROVADO"
    } else if (media > 7) {
        frmMedia.txtStatus.value = "APROVADO"
    } else {
        frmMedia.txtStatus.value = "RECUPERAÇÃO"
    }
}