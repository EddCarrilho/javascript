/**
 * Sorteio de uma mão de poker
 * Uso do array para simplificar o código
 * @author Eduardo Sewnarine Carrilho
 */

function sortearCarta() {
    
    let cartas = [`<img src="./img/2_of_clubs.png">`, `<img src="./img/2_of_diamonds.png">`, 
    `<img src="./img/2_of_hearts.png">`, `<img src="./img/2_of_spades.png">`, `<img src="./img/3_of_clubs.png">`, 
    `<img src="./img/3_of_diamonds.png">`, `<img src="./img/3_of_hearts.png">`, `<img src="./img/3_of_spades.png">`, 
    `<img src="./img/4_of_clubs.png">`, `<img src="./img/4_of_diamonds.png">`, `<img src="./img/4_of_hearts.png">`, 
    `<img src="./img/4_of_spades.png">`, `<img src="./img/5_of_clubs.png">`, `<img src="./img/5_of_diamonds.png">`, 
    `<img src="./img/5_of_hearts.png">`, `<img src="./img/5_of_spades.png">`, `<img src="./img/6_of_clubs.png">`, 
    `<img src="./img/6_of_diamonds.png">`, `<img src="./img/6_of_hearts.png">`, `<img src="./img/6_of_spades.png">`, 
    `<img src="./img/7_of_clubs.png">`, `<img src="./img/7_of_diamonds.png">`, `<img src="./img/7_of_hearts.png">`, 
    `<img src="./img/7_of_spades.png">`, `<img src="./img/8_of_clubs.png">`, `<img src="./img/8_of_diamonds.png">`, 
    `<img src="./img/8_of_hearts.png">`, `<img src="./img/8_of_spades.png">`, `<img src="./img/9_of_clubs.png">`, 
    `<img src="./img/9_of_diamonds.png">`, `<img src="./img/9_of_hearts.png">`, `<img src="./img/9_of_spades.png">`, 
    `<img src="./img/10_of_clubs.png">`, `<img src="./img/10_of_diamonds.png">`, `<img src="./img/10_of_hearts.png">`, 
    `<img src="./img/10_of_spades.png">`, `<img src="./img/ace_of_clubs.png">`, `<img src="./img/ace_of_diamonds.png">`, 
    `<img src="./img/ace_of_hearts.png">`, `<img src="./img/ace_of_spades.png">`, `<img src="./img/jack_of_clubs.png">`, 
    `<img src="./img/jack_of_diamonds.png">`, `<img src="./img/jack_of_hearts.png">`, `<img src="./img/jack_of_hearts.png">`, 
    `<img src="./img/jack_of_spades.png">`, `<img src="./img/king_of_clubs.png">`, `<img src="./img/king_of_diamonds.png">`, 
    `<img src="./img/king_of_hearts.png">`, `<img src="./img/king_of_spades.png">`, `<img src="./img/queen_of_clubs.png">`, 
    `<img src="./img/queen_of_diamonds.png">`, `<img src="./img/queen_of_hearts.png">`, `<img src="./img/queen_of_spades.png">`]

    let carta1 = cartas[Math.floor(Math.random() * 53)]
    let carta2 = cartas[Math.floor(Math.random() * 53)]
    let carta3 = cartas[Math.floor(Math.random() * 53)]
    let carta4 = cartas[Math.floor(Math.random() * 53)]
    let carta5 = cartas[Math.floor(Math.random() * 53)]

 

    document.getElementById('carta1').innerHTML = `<div>${carta1}</div>`;
    document.getElementById('carta2').innerHTML = `<div>${carta2}</div>`;
    document.getElementById('carta3').innerHTML = `<div>${carta3}</div>`;
    document.getElementById('carta4').innerHTML = `<div>${carta4}</div>`;
    document.getElementById('carta5').innerHTML = `<div>${carta5}</div>`;
}