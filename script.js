
let descriptionEL = "Get ready for an exhilarating and unforgettable adventure that will captivate your mind and test your skills at every turn! Choose your preferred difficulty level and dive into a world full of excitement, challenges, and brain-teasing puzzles that will push your problem-solving abilities to the limit. With every step you take, you’ll face new and thrilling obstacles, each offering a unique test of your wit and determination!";
let i = 0;
const typeWriter = () => {
    if (i < descriptionEL.length) {
        document.getElementById("description").innerHTML += descriptionEL.charAt(i);
        i++;
        setTimeout(typeWriter, 15);
    }
    console.log(i)
};
window.onload = typeWriter;

let fleped = document.querySelectorAll(".fliber");
let moves = document.querySelector(".moves");
let Timer = document.querySelector(".Timer");
let ii =0;
let interval = 1000;
let timeInterval;
fleped.forEach(function (card) {
    card.addEventListener("click", function () {
        this.classList.toggle("rotate");
        i++;
        moves.innerHTML = "moves: " + i;
        if (!timeInterval) {
            timeInterval = setInterval(() => {
                ii++;
                Timer.innerHTML = "Timer: " + ii + "s";
            }, interval);
        }


    });
});

let container = document.querySelector(".fleber-container");
let card = Array.from(container.children);

function shuffle(array) {
    let cardIndex = array.length -1;
    while (cardIndex > 0){
        let randomCard = Math.floor(Math.random() * (cardIndex + 1));
        let temp = array[cardIndex];
        array[cardIndex] = array[randomCard];
        array[randomCard] = temp;
        cardIndex--;
    }
    return array;
}
let shuffledCards = shuffle(card);
shuffledCards.forEach(function (card) {
    container.appendChild(card);
});
let startBtn = document.querySelector(".btnn");
startBtn.addEventListener("click", function () {
    location.reload();
});

flippCards(card);
function flippCards(card){
        this.classList.add("flippedd");
    let allShuffledCards = card.filter(flippedCards => flippedCards.classList.contains("flipped"));
    if(allShuffledCards.length === 2){
        noClicking();
    }
}



function noClicking(){
    body.classList.add("no-clicking");

};


