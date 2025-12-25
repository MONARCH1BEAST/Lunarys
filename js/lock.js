// js/lock.js

// 🔧 DEV MODE (set to false before final submission)
const DEV_MODE = false;

// Pages that should always be accessible
const PUBLIC_PAGES = ["login.html", "locked.html"];

// Midnight window
const START_HOUR = 0; // 12 AM
const END_HOUR = 5;   // 5 AM

function isMidnightWindow() {
  const now = new Date();
  const hour = now.getHours();
  return hour >= START_HOUR && hour < END_HOUR;
}

function getCurrentPage() {
  return window.location.pathname.split("/").pop();
}

document.addEventListener("DOMContentLoaded", () => {
  const page = getCurrentPage();

  // Allow public pages anytime
  if (PUBLIC_PAGES.includes(page)) return;

  // 🔒 Lock only if NOT in dev mode
  if (!DEV_MODE && !isMidnightWindow()) {
    window.location.href = "locked.html";
  }
});
