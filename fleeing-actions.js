const btn = document.getElementById("btn-atrapame");
const box = document.getElementById("ctn-btn");
const scoreEl = document.getElementById("score");

let score = 0;

document.addEventListener("mousemove", (e) => {

    const x = e.clientX;
    const y = e.clientY;

    const rectBtn = btn.getBoundingClientRect();
    const rectBox = box.getBoundingClientRect();

    const distX = Math.abs(x - (rectBtn.left + rectBtn.width / 2));
    const distY = Math.abs(y - (rectBtn.top + rectBtn.height / 2));

    const distance = 120;

    if (distX < distance && distY < distance) {

        let newX = Math.random() * (rectBox.width - rectBtn.width);
        let newY = Math.random() * (rectBox.height - rectBtn.height);

        btn.style.left = newX + "px";
        btn.style.top = newY + "px";
    }
});

// Cuando el usuario logra hacer click en el botón
btn.addEventListener("click", () => {
    score++;
    scoreEl.textContent = score;

    // El botón se mueve inmediatamente después de atraparlo
    const rectBtn = btn.getBoundingClientRect();
    const rectBox = box.getBoundingClientRect();

    let newX = Math.random() * (rectBox.width - rectBtn.width);
    let newY = Math.random() * (rectBox.height - rectBtn.height);

    btn.style.left = newX + "px";
    btn.style.top = newY + "px";
});
