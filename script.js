document.addEventListener("DOMContentLoaded", () => {

  /* ================= PAGE SWITCH ================= */
  function showPage(id) {
    document.querySelectorAll(".page").forEach(p =>
      p.classList.remove("active")
    );
    const page = document.getElementById(id);
    if (page) page.classList.add("active");
  }

  /* ================= PAGE 1 : TYPING ================= */
const text = "Happy Birthday Divya ❤︎";
let i = 0;

const typing = document.getElementById("typingText");
const startBtn = document.getElementById("startSurprise");

/* ===== Sparkle Function ===== */
function createSparkles() {
  const sparkleContainer = document.querySelector(".sparkle-layer");
  if (!sparkleContainer) return;

  sparkleContainer.innerHTML = ""; // clear old ones

  for (let i = 0; i < 25; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = 4 + Math.random() * 4 + "s";
    sparkle.style.animationDelay = Math.random() * 5 + "s";
    sparkle.style.fontSize = 14 + Math.random() * 20 + "px";

    sparkleContainer.appendChild(sparkle);
  }
}

function type() {
  if (!typing) return;

  if (i < text.length) {
    if (i === 0) createSparkles(); // start sparkles when typing begins
    typing.textContent += text[i++];
    setTimeout(type, 90);
  } else {
    // Add spotlight effect after typing finishes
    typing.innerHTML = typing.innerHTML.replace(
      "Divya",
      "<span class='spotlight'>Divya</span>"
    );

    if (startBtn) startBtn.classList.remove("hidden");
  }
}

type();

/* ===== Remove Sparkles When Continue Clicked ===== */
if (startBtn) {
  startBtn.addEventListener("click", function () {
    const sparkleLayer = document.querySelector("#page1 .sparkle-layer");
    if (sparkleLayer) {
      sparkleLayer.innerHTML = ""; // remove sparkles
    }
  });
}

  /* ================= PAGE 1 : COUNTDOWN ================= */
  startBtn.addEventListener("click", () => {

  const music = document.getElementById("bgMusic");
  if (music) {
    music.play();
  }

  startBtn.classList.add("hidden");
  if (typing) typing.classList.add("hidden");
  startCountdown();
});

  function startCountdown() {
    const area = document.getElementById("countdownArea");
    const num = document.getElementById("countdownNumber");

    if (!area || !num) return;

    area.classList.remove("hidden");
    createHearts();

    let count = 5;
    num.textContent = count;

    const interval = setInterval(() => {
      count--;
      num.textContent = count;

      if (count <= 0) {
        clearInterval(interval);
        setTimeout(() => showPage("page2"), 800);
      }
    }, 1000);
  }

  /* ================= BUTTON NAVIGATION ================= */
  const navButtons = {
    toPage3: "page3",
    toPage4: "page4",
    toPage5: "page5",
    toPage6: "page6"
  };

  Object.keys(navButtons).forEach(btnId => {
    const btn = document.getElementById(btnId);
    if (btn) {
      btn.addEventListener("click", () => {
        showPage(navButtons[btnId]);
      });
    }
  });

  /* ================= PAGE 3 : GIFT BOXES ================= */
  const messages = [
    "You make my days brighter 🤍",
    "Your smile heals me 😊",
    "Life feels softer with you 💫",
    "My heart chose you 💖",
    "Always & forever ✨",
    "This is just the beginning 💕"
  ];

  let index = 0;
  const boxArea = document.getElementById("boxArea");

  function createBox() {
    if (!boxArea) return;

    const box = document.createElement("div");
    box.className = "gift-box";
    box.textContent = "🎁";

    box.onclick = () => {
      box.classList.add("opened");
      box.textContent = messages[index++] || "";
      box.onclick = null;

      if (index < messages.length) {
        setTimeout(createBox, 300);
      } else {
        setTimeout(() => {
          const loveTag = document.getElementById("loveTag");
          const toPage4 = document.getElementById("toPage4");
          if (loveTag) loveTag.classList.remove("hidden");
          if (toPage4) toPage4.classList.remove("hidden");
        }, 600);
      }
    };

    boxArea.appendChild(box);
  }
  if (boxArea) createBox();

  /* ================= DOWNLOAD CARD ================= */
  const downloadBtn = document.getElementById("downloadCard");
  const card = document.getElementById("birthdayCard");

  if (downloadBtn && card && window.html2canvas) {
    downloadBtn.addEventListener("click", () => {
      html2canvas(card, { scale: 2 }).then(canvas => {
        const link = document.createElement("a");
        link.download = "Happy-Birthday-Divya.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      });
    });
  }

  /* ================= FLOATING HEARTS ================= */
  function createHearts() {
    const container = document.querySelector(".hearts-container");
    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 18; i++) {
      const heart = document.createElement("span");
      heart.className = "heart-float";
      heart.innerHTML = "🤍";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDelay = Math.random() * 3 + "s";
      container.appendChild(heart);
    }
  }

});


/* ================= CHOCOLATE SURPRISE ================= */
function showChocoMessage() {
  const popup = document.getElementById("choco-popup");
  const choco = document.getElementById("choco");
  const tapText = document.querySelector(".tap-text");
  const nextBtn = document.getElementById("toPage5");

  if (!popup || !choco) return;

  choco.classList.add("clicked");

  if (tapText) tapText.style.opacity = "0";

  popup.classList.add("show");

if (nextBtn) {
  setTimeout(() => {
    nextBtn.classList.remove("hidden");
    nextBtn.classList.add("fade-in-btn");
  }, 900);
}
  const rect = choco.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";

    confetti.style.left = cx + "px";
    confetti.style.top = cy + "px";

    const x = (Math.random() - 0.5) * 800 + "px";
    const y = (Math.random() - 0.5) * 800 + "px";

    confetti.style.setProperty("--x", x);
    confetti.style.setProperty("--y", y);

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1200);
  }

  choco.onclick = null;
}