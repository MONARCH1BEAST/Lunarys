# 🌙 Lunarys  
### Where thoughts surface after midnight.

Lunarys is an anonymous, time-locked web application designed for thoughts that only appear late at night.  
No identities. No noise. Just words — written when the world is quiet.

---

## ✨ Features

- 🌌 **Midnight-only access**  
  Writing and reading are restricted to a specific night-time window.

- 🕶️ **Anonymous by design**  
  No emails, no passwords, no personal data.  
  Users are assigned random anonymous usernames.

- 📝 **Minimal writing experience**  
  Clean, distraction-free UI with character limits for intentional expression.

- 🔒 **Backend-enforced time lock**  
  Midnight restriction is handled on the server and cannot be bypassed from the browser.

- 🎵 **Ambient background sound**  
  Subtle audio enhances the late-night atmosphere.

- 📱 **Responsive & lightweight**  
  Works smoothly across devices and screen sizes.

---

## 🛠️ Tech Stack

### Frontend
- HTML5  
- CSS3  
- Vanilla JavaScript  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB (Local / MongoDB Atlas)

---

## 🧠 How Lunarys Works

1. User enters anonymously (no signup).
2. Backend checks the current server time.
3. During the allowed midnight window:
   - Users can write thoughts.
   - Thoughts are stored in MongoDB.
4. Outside the window:
   - Writing is locked.
   - Users are redirected to a locked page.
5. All users see the same thoughts across devices.

