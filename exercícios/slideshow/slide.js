/**
 * Simples slide show
 * Exemplo de uso do array
 * @author Eduardo Sewnarine Carrilho
 */

let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 3000 //3000 milisegundos (3s)
let indice = 0

show()

function show() {
    document.getElementById('slide').className += 'FadeOut'
    setTimeout(() => {
        document.getElementById('slide').src=(`img/${slides
        [indice]}`)
        document.getElementById('slide').className = ""
    }, 1000)//ajuste 1: Trocar slide a cada 1s
    indice++
    if (indice === slides.length) {
        indice = 0
    }
    setTimeout(show, intervalo) //repetir o preocesso infinitamente ajustar o intervalo de acordo com o número de slides e tempo
    //de troca entre eles. Ex: 5 slides a cada 1s (intervalo = 5000)
    //(ajuste 2)
}
