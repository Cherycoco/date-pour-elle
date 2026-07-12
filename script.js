const ids = ["intro", "question", "planning", "success"];

const show = id => {
    ids.forEach(x => {
        document.getElementById(x).classList.toggle("active", x === id);
    });
};

// =======================
// Musique
// =======================

const music = document.getElementById("bgMusic");

// =======================
// Bouton commencer
// =======================

startBtn.addEventListener("click", async () => {

    try {

        music.volume = 0.35;
        await music.play();

    } catch (e) {

        console.error("Erreur lecture :", e);

    }

    show("question");

});

// =======================
// Bouton NON
// =======================

const jokes = [
    "Tu es sûre ? 🤔",
    "Réfléchis encore 😅",
    "Erreur 404 : le Non est introuvable.",
    "Ton doigt a glissé 😏",
    "Essaie encore 😇",
    "J'abandonne pas si vite.",
    "Le Oui est plus joli ❤️",
    "Cette option est déconseillée 😂",
    "On recommence ?",
    "Allez... 🥺"
];

let n = 0;

const popup = document.getElementById("popup");
const pt = document.getElementById("popupTitle");
const pc = document.getElementById("popupText");

popupBtn.onclick = () => {

    popup.classList.remove("show");

};

noBtn.onclick = () => {

    pt.textContent = jokes[n % jokes.length];

    pc.textContent = "Je refuse poliment d'accepter cette réponse 😄";

    popup.classList.add("show");

    n++;

    yesBtn.style.transform = `scale(${1 + n * 0.08})`;

    const x = Math.random() * 220 - 110;
    const y = Math.random() * 120 - 60;

    noBtn.style.transform = `translate(${x}px,${y}px)`;

};

// =======================
// Bouton OUI
// =======================

yesBtn.onclick = () => {

    show("planning");

};

// =======================
// Validation
// =======================

confirmBtn.onclick = () => {

    summary.textContent =
        `Rendez-vous ${day.value} à ${hour.value} pour ${activity.value}. ❤️`;

    show("success");

    if (window.confetti) {

        const end = Date.now() + 2500;

        (function frame() {

            confetti({
                particleCount: 5,
                spread: 60,
                origin: {
                    y: .6
                }
            });

            if (Date.now() < end) {

                requestAnimationFrame(frame);

            }

        })();

    }

};

// =======================
// Coeurs
// =======================

setInterval(() => {

    const h = document.createElement("div");

    h.textContent = "❤️";

    h.style.position = "fixed";
    h.style.left = Math.random() * 100 + "vw";
    h.style.bottom = "-20px";
    h.style.fontSize = (16 + Math.random() * 18) + "px";
    h.style.transition = "transform 6s linear, opacity 6s";
    h.style.pointerEvents = "none";

    document.body.appendChild(h);

    requestAnimationFrame(() => {

        h.style.transform = "translateY(-110vh)";
        h.style.opacity = "0";

    });

    setTimeout(() => {

        h.remove();

    }, 6000);

}, 500);
