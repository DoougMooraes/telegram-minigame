let score = 0;
let hamster;
let interval;

document.getElementById('start-button').addEventListener('click', startGame);

function startGame() {
    score = 0;
    document.getElementById('score').innerText = "Pontuação: " + score;

    hamster = document.getElementById('hamster');
    hamster.style.display = 'block';

    moveHamster();
    interval = setInterval(moveHamster, 1000);

    hamster.addEventListener('click', increaseScore);
}

function moveHamster() {
    const gameArea = document.getElementById('game-area');
    const maxX = gameArea.offsetWidth - hamster.offsetWidth;
    const maxY = gameArea.offsetHeight - hamster.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    hamster.style.left = `${randomX}px`;
    hamster.style.top = `${randomY}px`;
}

function increaseScore() {
    score++;
    document.getElementById('score').innerText = "Pontuação: " + score;
}

function stopGame() {
    clearInterval(interval);
    hamster.style.display = 'none';
    hamster.removeEventListener('click', increaseScore);
}
