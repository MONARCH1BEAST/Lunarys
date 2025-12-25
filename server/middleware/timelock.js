// server/middleware/timeLock.js

// 🔧 DEV MODE (set false before final submission)
const DEV_MODE = false;

// Midnight window
const START_HOUR = 0; // 12 AM
const END_HOUR = 5;   // 5 AM

function isMidnightWindow() {
  const now = new Date();
  const hour = now.getHours();
  return hour >= START_HOUR && hour < END_HOUR;
}

module.exports = function (req, res, next) {
  if (DEV_MODE) {
    return next();
  }

  if (!isMidnightWindow()) {
    return res.status(403).json({
      message: "This action is only allowed after midnight 🌙",
    });
  }

  next();
};
