# 🌙 Lunarys

Lunarys is an anonymous, time-locked web application where users share thoughts that surface only after midnight.  
No identities. No noise. Just words.

---

## ✨ Key Features

- 🌌 Midnight-only access (server-enforced)
- 🕶️ Anonymous usage (no signup, no personal data)
- 📝 Minimal writing interface
- 🔒 Backend-secured logic
- 🎵 Ambient background sound
- 📱 Responsive across devices

---

## 🛠️ Tech Stack

- Frontend: HTML, CSS, Vanilla JavaScript  
- Backend: Node.js, Express.js  
- Database: MongoDB  

---

## 🧠 How It Works

1. User enters anonymously  
2. Backend validates the time window  
3. At midnight:
   - Users can write and read thoughts  
4. Outside midnight:
   - Writing is locked  
5. All thoughts are shared globally

---

## 📁 Project Structure

LUNARYS/
├── assets/
├── css/
├── js/
├── server/
├── index.html
├── login.html
├── write.html
├── locked.html
└── about.html

---

## 🚀 Run Locally

git clone https://github.com/your-username/lunarys.git  
cd lunarys  
npm install  
node server/server.js  

Open in browser:  
http://localhost:5000

---

## ⚙️ Environment Variables

Create a `.env` file:

MONGO_URI=mongodb://localhost:27017/lunarys

---

## 🧪 Dev Mode

Enable testing outside midnight:

DEV_MODE = true  

Disable before deployment:

DEV_MODE = false

---

## 🔐 Security Notes

- Sensitive logic runs on the backend
- No personal user data is stored
- Frontend code is intentionally public

---

## 🌙 Closing

Some thoughts wait for the night.  
**Lunarys** gives them space.
