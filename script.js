let noCount = 0;

// Listahan ng mga text na lalabas kapag pinipindot ang "No"
const messages = [
    "Please?",
    "Give me a chance!",
    "Are you sure?",
    "Think again!",
    "You might regret this!",
    "One last chance!",
    "Pretty please?",
    "Don't break my heart! 💔"
];

function rejectLove() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    if (noCount < messages.length) {
        // Palitan ang text ng NO button
        noButton.innerText = messages[noCount];
        noCount++;

        // Paliitin ang NO button, Palakihin ang YES button
        noButton.style.transform = `scale(${1 - noCount * 0.1})`;
        yesButton.style.transform = `scale(${1 + noCount * 0.15})`;
    }

    // Kung umabot na sa dulo ng messages, itago ang NO button
    if (noCount === messages.length) {
        noButton.style.display = "none";
    }
}

function acceptLove() {
    const card = document.getElementById("card");

    // Palitan ang laman ng card
    card.innerHTML = `
        <img src="https://media1.tenor.com/m/oWd45nSn2bIAAAAC/kiss-kisses.gif" alt="Happy Kissing Bears" style="width: 250px;">
        <h2 style="color: #d32f2f; font-weight: bold; font-size: 1.8rem; margin-top: 15px;">
            YAYAYAYAYAYAY! I LOVE YOU SO MUCH MY SWEET LITTLE KITTEN! ❤️
        </h2>
    `;

    // Gawing pink ang background
    document.body.classList.add("accepted-bg");
}