
function showMessage(name) {
    const message = document.getElementById("message");

    if (name === "Maria") {
        message.innerHTML =
            "Dear Maria 💕 You are a beautiful soul, and you deserve all the happiness in the world. Never stop shining! 🌷";
    } else {
        message.innerHTML =
            "Dear Rim 💗 Your smile makes everything brighter. You are special, loved, and unforgettable! 🧸";
    }
}

function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");
    heart.innerHTML = ["💗", "💕", "💖", "🌸", "✨"][
        Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);
S