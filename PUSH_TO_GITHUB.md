# Push this project to GitHub

Follow these steps in **PowerShell** or **Git Bash** (from your project folder).

## 1. Create a repo on GitHub

1. Go to [github.com](https://github.com) and sign in.
2. Click **New** (or **+** → **New repository**).
3. Name it (e.g. `mr-otp-website`).
4. Choose **Public**.
5. Do **not** add a README, .gitignore, or license (this project already has them).
6. Click **Create repository**.

## 2. Run these commands in your project folder

Open PowerShell or Git Bash, then:

```powershell
cd "d:\Backup\Pendrive\mr-otp-website"
```

**If this folder is not yet a git repo:**

```powershell
git init
git add .
git commit -m "Initial commit: Mr-OTP website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

**If it is already a git repo:**

```powershell
git add .
git status
git commit -m "Update: Mr-OTP website"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and the repo name you created (e.g. `https://github.com/romysahamied/mr-otp-website.git`).

If `origin` already exists and you want to change it:

```powershell
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## 3. Important

- **`.env.local` is not pushed** (it’s in `.gitignore`). Your secrets stay local.
- On GitHub, set **Environment variables** or **Secrets** for deployment (e.g. `RESEND_API_KEY`, `SMTP_*`, `CONTACT_RECIPIENT_EMAIL`) in the repo or in your hosting (Vercel/Netlify) dashboard.
