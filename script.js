// Messages for envelopes
const letters = {
  1: `Happiest Birthday to the person I love the most :3 ... (your full text here)`,
  2: `I am so glad that, for once in my life, we met...`,
  3: `It has been a long journey for my feelings, pumpkin...`,
  4: `But who knows, baby, that these mere feelings...`,
  5: `I am so into you, I am so serious about you, baby...`
};

// Create envelopes dynamically
function createEnvelopes() {
  const container = document.getElementById("envelopes");
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button");
    btn.className = "envelope";
    btn.dataset.index = i;
    btn.innerHTML = `✉️ <span class="num">${i}</span>`;
    btn.addEventListener("click", () => openLetter(i));
    container.appendChild(btn);
  }
  positionEnvelopes();
}

// Position envelopes around photo
function positionEnvelopes() {
  const envelopes = document.querySelectorAll(".envelope");
  const stage = document.getElementById("stage");
  const rect = stage.getBoundingClientRect();
  const radius = Math.min(rect.width, rect.height) / 2 - 100;

  envelopes.forEach((el, i) => {
    const angle = (i * (360 / envelopes.length)) * (Math.PI / 180);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    el.style.left = `calc(50% + ${x}px)`;
    el.style.top = `calc(50% + ${y}px)`;
  });
}

// Open modal with letter
function openLetter(index) {
  document.getElementById("modal").classList.add("show");
  document.getElementById("modalTitle").textContent = `Letter ${index}`;
  document.getElementById("letterText").textContent = letters[index];
}

// Close modal
function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

// Event listeners
window.addEventListener("load", () => {
  createEnvelopes();
  document.getElementById("closeBtn").addEventListener("click", closeModal);
  document.getElementById("modalBg").addEventListener("click", closeModal);
  window.addEventListener("resize", positionEnvelopes);
});
