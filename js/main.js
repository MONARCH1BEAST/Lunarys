document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("thoughtsContainer");
  if (!container) return;

  try {
    const res = await fetch("/api/thoughts");

    // 🔒 Midnight lock (403)
    if (res.status === 403) {
      const data = await res.json();
      container.innerHTML = `
        <div class="thought" style="text-align:center; opacity:0.8;">
          🌙 <br><br>
          ${data.message || "This space opens after midnight."}
        </div>
      `;
      return;
    }

    // ❌ Other server errors
    if (!res.ok) {
      throw new Error("Server error");
    }

    const thoughts = await res.json();

    // Empty state
    if (thoughts.length === 0) {
      container.innerHTML = `
        <div class="thought" style="text-align:center; opacity:0.6;">
          No thoughts yet.<br>
          Be the first to write one tonight.
        </div>
      `;
      return;
    }

    // Render thoughts
    container.innerHTML = "";
    thoughts.forEach((thought) => {
      const card = document.createElement("div");
      card.className = "thought";

      const text = document.createElement("p");
      text.className = "thought-text";
      text.textContent = thought.content;

      const meta = document.createElement("div");
      meta.className = "thought-meta";
      meta.textContent = `— ${thought.user?.username || "anonymous"}`;

      card.appendChild(text);
      card.appendChild(meta);
      container.appendChild(card);
    });

  } catch (err) {
    container.innerHTML = `
      <div class="thought" style="text-align:center; opacity:0.6;">
        Something went wrong.<br>
        Please try again later.
      </div>
    `;
  }
});
