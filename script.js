const container = document.getElementById("container");
const colors = [
    "#f94144",
    "#f3722c",
    "#f8961e",
    "#f9c74f",
    "#90be6d",
    "#43aa8b",
    "#577590",
];
const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));

    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = "#1d1d1d";
    element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
document.addEventListener("keydown", (event) => {
    const sq = document.querySelectorAll(".square");
    if (event.code === "Space") {
        for (let i = 0; i < sq.length; i++) {
            sq[i].style.background = "#ffffff";
        }
    } else {
        return;
    }
});
