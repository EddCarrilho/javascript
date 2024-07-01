/**
 * Cálculo da média de 4 notas
 * @author Eduardo Carrilho
 */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
            console.log('Service Worker registrado com escopo: ', registration.scope)
        }).catch((error) => {
            console.log('Falha no registro do Service Worker: ', error)
        })
}

// variáveis
let idade,freqMax,freqTMin,freqTMax,calculo1,calculo2


function calcular() {
    idade = Number(frmFCM.txtIdade.value)
    if (idade == 0) {
        alert("Digite sua idade para calcular!")
        return
    } else {
        calculo1 = 208 - (0.7 * idade)
        frmFCM.txtFreq.value = calculo1.toFixed(2)
    }
    
    calculo2 = calculo1 * 0.70
    frmFCM.txtFreqMin.value = calculo2.toFixed(2)
    calculo2 = calculo1 * 0.85
    frmFCM.txtFreqMax.value = calculo2.toFixed(2)
}