# 🏰 Mytherra Web - Full Stack Project

A full-stack web application built with **React + Vite** (frontend) and **Express.js + MongoDB** (backend).

## 📋 Requirements

- **Node.js** (v16+)
- **npm** or **yarn**
- **MongoDB Atlas** account (or local MongoDB)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/MrAtalay/mytherra-web.git
cd mytherra-web
```

### 2. Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
cd ..
```

### 3. Environment Configuration

Create `.env` file in the `server/` directory:
```bash
cp server/.env.example server/.env
```

Then edit `server/.env` and add your MongoDB credentials:
```
PORT=5000
MONGO_URI=mongodb+srv://your_username:your_password@cluster0.abc.mongodb.net/mytherra?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_key
```

**⚠️ Important: Each developer needs their own MongoDB Atlas account!**  
See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed MongoDB setup instructions.

### 4. Start the Application

**Terminal 1 - Backend (port 5000):**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend (port 5173):**
```bash
npm run dev
```

### 5. Access the App
- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000

## 📁 Project Structure

```
├── src/                 # React frontend
│   ├── components/      # React components
│   ├── pages/          # Page components
│   ├── data/           # Static data
│   └── css/            # Stylesheets
├── server/             # Express backend
│   ├── src/
│   │   ├── config/    # Database config
│   │   ├── models/    # MongoDB models
│   │   ├── routes/    # API routes
│   │   └── middleware/
│   └── index.js
└── public/             # Static assets
```

## 🛠️ Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

**Backend:**
- `npm run dev` - Start with nodemon (auto-reload)
- `npm start` - Start production server

## ⚠️ Important Notes

- **Never commit `.env` file** (already in .gitignore)
- Use `.env.example` as template for your environment variables
- Make sure MongoDB network access allows your IP address
- Frontend runs on port **5173**, backend on port **5000**

## 📝 License

ISC
