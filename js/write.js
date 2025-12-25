document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.getElementById("thoughtInput");
  const charCount = document.getElementById("charCount");
  const postBtn = document.getElementById("postBtn");

  // Safety check
  if (!textarea || !charCount || !postBtn) return;

  // generate / get anonymous username
  function getUsername() {
    let username = localStorage.getItem("mt_username");
    if (!username) {
      username = "anon_" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem("mt_username", username);
    }
    return username;
  }

  // character counter
  textarea.addEventListener("input", () => {
    const len = textarea.value.length;
    charCount.textContent = `${len} / 280`;
    postBtn.disabled = len === 0;
  });

  // submit thought
  postBtn.addEventListener("click", async () => {
    const content = textarea.value.trim();
    if (!content) return;

    postBtn.disabled = true;

    try {
      const res = await fetch("/api/thoughts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: getUsername(),
        }),
      });

      // 🔒 Midnight lock handling
      if (res.status === 403) {
        throw new Error("MIDNIGHT_LOCK");
      }

      if (!res.ok) {
        throw new Error("POST_FAILED");
      }

      // success → go to feed
      window.location.href = "/index";

    } catch (err) {
  // Remove existing error if any
  const existingError = document.getElementById("writeError");
  if (existingError) existingError.remove();

  // Hide the Post button
  postBtn.style.display = "none";

  // Create error message in the SAME PLACE
  const errorBox = document.createElement("span");
  errorBox.id = "writeError";
  errorBox.textContent = "🌙 You can write only after midnight.";
  errorBox.style.color = "#ff8c8c";
  errorBox.style.fontSize = "0.9rem";
  errorBox.style.opacity = "0.9";

  // Insert error exactly where button was
  postBtn.parentElement.appendChild(errorBox);

  // Re-enable posting UI when user types again
  textarea.addEventListener(
    "input",
    () => {
      const err = document.getElementById("writeError");
      if (err) err.remove();
      postBtn.style.display = "inline-block";
    },
    { once: true }
  );
}

  });
});
