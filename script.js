// Messages for envelopes
const letters = {
  1: `Happiest Birthday to the person I love the most :3, I hope you enjoy your day today, baby! Thank you so much for coming into my life, my love. Thank you for existing, babyy. I hope this special day of yours brings you happiness and laughter. I just want you to know that I am beyond thankful that I had the chance to be part of your special day—even though I am far from you. 

Baby, you don’t have any idea how your presence lightens up my mood. I hope you never change, baby. You’re like a star in the universe that shines despite the darkness. I am so thankful to your parents for not stopping creating a soon-to-be individual until they made you HAHAHAHHAJAIAIAJJAJA kidding, but I am indeed thankful that they made you happen. `,
  2: `I am so glad that, for once in my life, we met. You’re the biggest plot twist of my life since last year—the very first moment we had interaction. From that very first moment I met you, something inside my system glitched. I never thought that simple interaction would make me write this letter, lmaoo. 

It is the way you talk, the way you interact with people, the way you think, your humor, basta everything about you got me. You don’t know how much my jaw hurts when we’re throwing banter towards each other back then out of laughter. You never failed to make me happy. You never failed to amuse me. You never failed to make me curious about you. You never failed to get my interest. You never failed to impress me. You also never failed to hurt me, emerat HAHAHAHHAJAJAHJA para realistic diba, baby, sorry agad hehe.`,
  3: `It has been a long journey for my feelings, pumpkin.Do you still remember when I first confessed my feelings to you, and you just said that you only see me as your friend and maybe what I feel towards you is just a mere feeling, nothing more but infatuation?…. Baby, when you told me that, I told myself na baka nga infatuated lang me then after that I shrugged it off. 

Alam mo ba, baby, whenever someone’s trying to get your attention, if you ever notice, lagi ko xla binabash hehe. naiiniz kasi ako e papanzn sila. But baby, alam mo rin ba, whenever you impress me, gusto ko lagi sabihin na, “that’s my girl out there everyone” HAHJAJSJSKAK pls, I am so proud of you and I will always be :)`,
  4: `But who knows, baby, that these mere feelings. you told me are still actively igniting within my heart? Why does this mere feeling always long for you, yearn for you? Why do these mere feelings you told me are still with me up to this date? It’s been a year, baby, but why does this mere feeling stay the same? It is not the same pala because it grew deeper and deeper. I never thought that these mere feelings of mine you told me would reach this moment. These feelings of mine are not mere, pumpkin, it have already surpassed that phase.><

My love, I know, we both know that the last time we tried, we failed. But that doesn’t mean that we will fail this time, or if ever it will happen, just so you know that I am always ready to try and fail with you multiple times. It’ll never hinder my love for you. My heart always aches for you, baby. It always wants you. No matter how many times you hurt me, you pushed me away, rejected me back then—still, my heart always yearns for you. It has always been you, baby.`,
  5: `I am so into you, I am so serious about you, baby. I hope you feel that my intention is pure and genuine. I want nothing but to make you feel loved and happy. I cannot guarantee that I won’t hurt you, but I promise I will always try my best not to hurt you. I may not be a perfect person, but I will try my best to be the best version of myself for you, for me to be able to treat you the way you deserve. You don’t know how much I’ve been holding myself back to say those three words, but since this is your day, I want you to know that I love you, I love you so, so much. 3

You know what, baby, I am so happy knowing that you like me. But I would be the happiest person in the whole galaxy if you let me and allow me to express myself more, prove myself more to you that I love you :> I know this is your special day and I assume this might be the perfect timing for me to ask you and have your permission. So baby, may I court you?`
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
