const startBtn = document.getElementById('startBtn');
const userInput = document.getElementById('userInput');
const timerElement = document.getElementById('time');
const scoreElement = document.getElementById('scoreValue');
const endMessage = document.getElementById('endMessage');
const sentenceElement = document.getElementById('sentence');
const last = document.getElementById('last');
const play = document.getElementById('play');
const playss = document.getElementById('playss');
const plays = document.getElementById('plays');
const final = document.getElementById('final');

let timeLeft = 60; 
let score = 0;
let gameStarted = false;
let timerInterval;

const sentences = ["Once upon a time, a little girl found a magic key. She did not know what it opened. She tried it on many doors, but none worked. Then, she found a big chest in the forest. She opened it and found a beautiful treasure inside. She was very happy.",
    "The quick brown fox jumps over the lazy dog",
    "JavaScript is a versatile programming language",
    "HTML and CSS are essential for web development",
    "React is a popular JavaScript library for building user interfaces",
    "Practice makes perfect, especially when typing"
];



startBtn.addEventListener('click', startGame);

function startGame() {
    if (gameStarted) return;

   
    gameStarted = true;
    score = 0;
    timeLeft = 60;
    scoreElement.textContent = score;
    timerElement.textContent = timeLeft;

    
    const randomIndex = Math.floor(Math.random() * sentences.length);
    sentenceElement.textContent = sentences[randomIndex];
    userInput.value = '';

   let list = startBtn.classList;

   list.add("hero");
   

   
    timerInterval = setInterval(updateTimer, 1000);



    
    userInput.addEventListener('input', checkInput);
}


function updateTimer() {
    if (timeLeft <= 0) {
        endGame();
        clearInterval(timerInterval);
    } else {
        playss.play();
        playss.rate = 2;
        
        timeLeft--;
        timerElement.textContent = timeLeft;
    }
}

function checkInput() {
    const sentence = sentenceElement.textContent;
    const userText = userInput.value;

    if (userText === sentence) {
        score++;
        
        scoreElement.textContent = score;
        userInput.value = ''; 
        const randomIndex = Math.floor(Math.random() * sentences.length);
        sentenceElement.textContent = sentences[randomIndex];
     
    }
   
}




function endGame() {
    if(timeLeft === 0){
        play.play();
        last.style.visibility = "visible";

        final.textContent = `Game Over! Your final score is: ${score}`;

    }
    else{
        last.style.visibility = "hidden";
    }
    gameStarted = false;
  
    userInput.disabled = true;
    startBtn.textContent = 'Restart Game';
    startBtn.addEventListener('click', restartGame);
}


function restartGame() {
    gameStarted = false;
    userInput.disabled = false;
    userInput.value = '';
    score = 0;
    scoreElement.textContent = score;
    endMessage.textContent = '';
    startBtn.textContent = 'Start Game';
}


const speakFun = (input)=>{
    let takeInput = new SpeechSynthesisUtterance(input);
    takeInput.lang = "en-GB";

    takeInput.rate = 1;
    window.speechSynthesis.speak(takeInput);
}
var mysound = document.getElementById('sounds');





function getFocus(){
    mysound.play();
    userInput.focus();
}








 