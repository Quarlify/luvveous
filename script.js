// Define the black card and white card options
const blackCard = "Walking down the street Jack was glad seeing the __";
const whiteCardOptions = [
    "a talking cat",
    "a dancing penguin",
    "a flying elephant",
    "a singing banana",
    "a laughing giraffe",
    "an invisible unicorn",
    "a surfing kangaroo",
];

// Player scores
let player1Score = 0;
let player2Score = 0;

// Initialize player nickname
let playerNickname = localStorage.getItem("playerNickname");

if (!playerNickname) {
    playerNickname = prompt("Please enter your nickname:");
    localStorage.setItem("playerNickname", playerNickname);
}

// Track the current judge (player 1 or player 2)
let currentJudge = 1;

// Initialize the game
function initializeGame() {
    // Display the player's nickname
    const nicknameElement = document.getElementById("player-nickname");
    nicknameElement.textContent = playerNickname;

    document.getElementById("black-card").innerHTML = `<h1>${blackCard}</h1>`;
    document.getElementById("white-cards").innerHTML = "";

    // Generate white card options
    whiteCardOptions.forEach((option, index) => {
        const whiteCard = document.createElement("div");
        whiteCard.classList.add("white-card");
        whiteCard.textContent = option;
        whiteCard.addEventListener("click", () => chooseWhiteCard(index));
        document.getElementById("white-cards").appendChild(whiteCard);
    });

    // Update the scoreboard
    document.getElementById("player-1-score").textContent = player1Score;
    document.getElementById("player-2-score").textContent = player2Score;

    // Set the judge button
    const judgeButton = document.getElementById("judge-button");
    judgeButton.textContent = `Judge (Player ${currentJudge})`;
    judgeButton.addEventListener("click", judgeRound);
}

// Function to choose a white card
function chooseWhiteCard(index) {
    // Implement the logic for a player choosing a card

    // Update the player's nickname in the chosen card for display
    const selectedCard = whiteCardOptions[index];
    const formattedCard = `${playerNickname} chose: ${selectedCard}`;

    // Implement the logic to send this choice to other players if you have a multiplayer setup
}

// Function to judge the round
function judgeRound() {
    // Implement the logic for judging the round and updating scores

    // Switch judges (between Player 1 and Player 2)
    currentJudge = currentJudge === 1 ? 2 : 1;
    initializeGame();
}

// Initialize the game
initializeGame();
