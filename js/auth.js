document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("enterBtn");
  if (!btn) return;

  btn.addEventListener("click", async () => {
    btn.disabled = true;

    try {
      const res = await fetch("/api/auth/anonymous", {
        method: "POST",
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      localStorage.setItem("mt_username", data.username);

      // ✅ CORRECT ROUTE
      window.location.href = "/index";
    } catch {
      alert("Could not enter. Try again.");
      btn.disabled = false;
    }
  });
});
