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
  const text = "Happy Birthday Divya❤︎⁠";
  let i = 0;
  const typing = document.getElementById("typingText");
  const startBtn = document.getElementById("startSurprise");

  function type() {
    if (!typing) return;
    if (i < text.length) {
      typing.innerHTML += text[i++];
      setTimeout(type, 90);
    } else if (startBtn) {
      startBtn.classList.remove("hidden");
    }
  }
  type();

  /* ================= PAGE 1 : COUNTDOWN ================= */
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      startBtn.classList.add("hidden");
      if (typing) typing.classList.add("hidden");
      startCountdown();
    });
  }

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

  /* ================= PAGE BUTTON NAVIGATION ================= */
  ["toPage3", "toPage4", "toPage5"].forEach(id => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", () => showPage(id.replace("to", "").toLowerCase()));
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
