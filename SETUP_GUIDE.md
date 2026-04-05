# 🔧 MongoDB Setup Guide

## 📌 Important: Each Developer Needs Their Own MongoDB

This project uses **MongoDB Atlas** (cloud database). You **cannot** use someone else's MongoDB login. Follow these steps:

---

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click **"Sign Up"** or **"Sign In"**
3. Create a new account or use your own email
4. Verify your email

---

## Step 2: Create a Cluster

1. After login, click **"Create"** to build a new cluster
2. Choose **"M0 FREE"** tier (perfect for development)
3. Select your preferred region (closer = faster)
4. Click **"Create Cluster"** (wait 5-10 minutes)

---

## Step 3: Create Database User

1. Go to **Database Access** (left menu)
2. Click **"Add Database User"**
3. Set username: `admin`
4. Set password: (create a strong one)
5. Click **"Add User"**
6. **Save this username and password!**

---

## Step 4: Configure Network Access

1. Go to **Network Access** (left menu)  
2. Click **"Add IP Address"**
3. **For Development:** Click **"Allow Access from Anywhere"** (`0.0.0.0/0`)
   - ⚠️ **Not safe for production!**
4. Confirm

---

## Step 5: Get Your Connection String

1. Go to **Clusters** (left menu)
2. Click **"Connect"** button on your cluster
3. Choose **"Connect your application"**
4. Select **"Node.js"** as driver
5. Copy the connection string (looks like):
```
mongodb+srv://admin:PASSWORD@cluster0.xxxxx.mongodb.net/mytherra?retryWrites=true&w=majority
```

---

## Step 6: Update `.env` File

1. Copy `.env.example` to `.env`:
```bash
cp server/.env.example server/.env
```

2. Edit `server/.env` and replace:
```
MONGO_URI=mongodb+srv://admin:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/mytherra?retryWrites=true&w=majority
```

**Replace:**
- `YOUR_PASSWORD` → Your database password
- `cluster0.xxxxx` → Your actual cluster name

---

## ✅ Verification

Run the backend:
```bash
cd server
npm run dev
```

If you see:
```
✅ Server running on port 5000
✅ MongoDB connected
```

**Success!** 🎉

---

## ❌ Common Issues

| Problem | Solution |
|---------|----------|
| ENOTFOUND MongoDB server | Check if cluster is created |
| ECONNREFUSED | Check Network Access settings (add your IP) |
| Wrong password error | Double-check `.env` file password |
| Connection timeout | Try another region for your cluster |

---

## 🔐 Security Tips for Production

- ✅ Use strong passwords
- ⚠️ **Never commit `.env` file!** (already in .gitignore)
- 🔒 Don't use `0.0.0.0/0` in production (restrict to your servers only)
- 📝 Rotate credentials regularly
