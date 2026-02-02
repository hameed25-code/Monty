const messages = [
    "Are you sure?",
    "Nejamava 😏??",
    "Nejama Dha Soldriya😟?",
    "Nalla Yochichu Sollu D🤨",
    "Serious ah ketkuren😠",
    "Aprm Na Poiruven D☹️",
    "Sathiyama Poiduven D☹️",
    "Hey Nejama naa Venama D😢",
    "MO unaku un JU Venama D😭",
    "Summa dha ketan Pondati Epotum Ne dha Enaku ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
