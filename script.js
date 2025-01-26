document.addEventListener("DOMContentLoaded", () => {
    const heartsContainer = document.querySelector(".hearts");

    function createHeart() {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";
        heartsContainer.appendChild(heart);

        setTimeout(() => heart.remove(), 5000); // Remove heart after it falls
    }

    setInterval(createHeart, 300);
});
