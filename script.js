let order  = [];
let clickedOrder = [];
let score = 0;

// 0 = verde 
//1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//criando ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = creatColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);

    }

}

//ascende a proxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

//checa se os botões clicados sãos os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

//click do usuário
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color;
    creatColorElement(color).classList.add('selected');

    setTimeout(() =>{
        creatColorElement(color).classList.remove('selected');
        checkOrder();
    },250);

    
}

//retorno da cor
let creatColorElement = (color) => {
    if(color == 0){
        return green;
    }else if(color == 1){
        return red;
    } else if (color == 2){
        return yellow;
    }else if (color == 3){
        return blue;
    }
}

//proximo nivel do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//game over
let gameOver = () =>{
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo `);
    order = [];
    clickedOrder = [];

    playGame();
}

//inciando jogo
let playGame = () => {
    alert('Bem vindo ao Gêneses! Iniciando um novo jogo!');
    score = 0;

    nextLevel();
} 

//eventos de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//incio do jogo 
playGame();