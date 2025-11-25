const btn = document.getElementById("btn-atrapame");
const box = document.getElementById("ctn-btn");
const scoreEl = document.getElementById("score");

let score = 0;

function updateEscape(e) {
    let x, y;

    // detectar mouse o touch
    if (e.type === "touchmove" || e.type === "touchstart") {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    } else {
        x = e.clientX;
        y = e.clientY;
    }

    const rectBtn = btn.getBoundingClientRect();
    const rectBox = box.getBoundingClientRect();

    const distX = Math.abs(x - (rectBtn.left + rectBtn.width / 2));
    const distY = Math.abs(y - (rectBtn.top + rectBtn.height / 2));

    const distance = 140; // distancia mayor para móvil

    if (distX < distance && distY < distance) {
        let newX = Math.random() * (rectBox.width - rectBtn.width);
        let newY = Math.random() * (rectBox.height - rectBtn.height);

        btn.style.left = newX + "px";
        btn.style.top = newY + "px";
    }
}

// Mouse + Touch
document.addEventListener("mousemove", updateEscape);
document.addEventListener("touchmove", updateEscape);
document.addEventListener("touchstart", updateEscape);

btn.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;

    const rectBtn = btn.getBoundingClientRect();
    const rectBox = box.getBoundingClientRect();

    let newX = Math.random() * (rectBox.width - rectBtn.width);
    let newY = Math.random() * (rectBox.height - rectBtn.height);

    btn.style.left = newX + "px";
    btn.style.top = newY + "px";
});
