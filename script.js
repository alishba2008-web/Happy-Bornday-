
const wishBtn = document.getElementById("wishBtn");
const wishMessage = document.getElementById("wishMessage");

const surpriseBtn = document.getElementById("surpriseBtn");
const giftMessage = document.getElementById("giftMessage");

// Birthday wish button
wishBtn.addEventListener("click", function () {
    wishMessage.textContent =
        "✨ May all your beautiful wishes come true! Happy Birthday! 🖤";

    wishBtn.textContent = "Wish Made! 🎂";
});

// Surprise gift button
surpriseBtn.addEventListener("click", function () {
    if (giftMessage.classList.contains("hidden")) {
        giftMessage.classList.remove("hidden");
        surpriseBtn.textContent = "Close Your Surprise 🖤";
    } else {
        giftMessage.classList.add("hidden");
        surpriseBtn.textContent = "Open Your Gift 🎁";
    }
});
