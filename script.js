const messages = [
    "Jestes pewna?",
    "Jestes naprawde tego pewna?",
    "Aby napewno?",
    "Skarbie:(",
    "Prosze cie kotek no:(",
    "Poplacze sie jesli powiesz nie",
    "I bede bardzo smutny",
    "Bardzo, bardzo smutny:(",
    "Okej no...",
    "PROSZE POWIEDZ TAK"
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