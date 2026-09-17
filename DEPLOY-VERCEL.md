# 🚀 Deploying VAI-ai on Vercel

This project is completely optimized for **zero-configuration** static deployment on [Vercel](https://vercel.com).

---

## ⚡ Method 1: 1-Click Import from GitHub (Recommended)

Since the repository is already synchronized on GitHub at **[wakeups1dd/vai-prototype](https://github.com/wakeups1dd/vai-prototype)**, deploying takes under 60 seconds:

1. **Sign in to Vercel**: Go to [https://vercel.com/login](https://vercel.com/login) and log in with your GitHub account (`wakeups1dd`).
2. **Add New Project**:
   - Click **Add New...** $\rightarrow$ **Project** (or visit [https://vercel.com/new](https://vercel.com/new)).
3. **Import Git Repository**:
   - Locate **`vai-prototype`** from your repository list and click **Import**.
4. **Configure Project**:
   - **Framework Preset**: `Other` (Automatically detected)
   - **Root Directory**: `./` (Default)
   - **Build Command**: Leave empty (Pure static site, no build step required)
   - **Output Directory**: Leave empty
5. **Deploy**:
   - Click **Deploy**.
   - Within 15–30 seconds, your site will be live with a production URL (e.g., `https://vai-prototype.vercel.app`) and free automatic SSL!

---

## 🔑 Setting your OpenRouter API Key in Vercel

The platform has built-in Vercel Serverless endpoints (`/api/chat` and `/api/config`) that securely communicate with OpenRouter without exposing your secret API key to client browsers:

### Option A: Via Vercel Web Dashboard (Easiest)
1. In your project dashboard on Vercel, go to **Settings** $\rightarrow$ **Environment Variables**.
2. Add a new variable:
   - **Key**: `OPENROUTER_API_KEY`
   - **Value**: `your_openrouter_api_key_here`
3. Select **Production**, **Preview**, and **Development** checkboxes.
4. Click **Save** and redeploy.

### Option B: Via Vercel CLI
```bash
npx vercel env add OPENROUTER_API_KEY
```
*(Paste your key when prompted)*

---

## 💻 Method 2: Deploying via Vercel CLI

If you prefer deploying directly from your local terminal:

```bash
# 1. Run Vercel CLI in project directory
npx vercel

# 2. Complete the interactive setup:
# ? Set up and deploy "d:\download2\vai-demo-complete"? [Y/n] y
# ? Which scope do you want to deploy to? (Select your personal account)
# ? Link to existing project? [y/N] n
# ? What's your project's name? vai-prototype
# ? In which directory is your code located? ./

# 3. Deploy to production
npx vercel --prod
```

---

## 🌐 Clean URLs & Route Map

Thanks to the configured `vercel.json`, your platform supports clean SaaS URLs:

| Clean Route | Traditional File | Description |
| :--- | :--- | :--- |
| `/` | `index.html` | Commercial SaaS Landing Page |
| `/login` | `login.html` | Split-Screen Auth & 1-Click Demo Portal |
| `/app` | `app.html` | Student Learning Cockpit Platform |
| `/admin` | `admin.html` | Institutional Admin Dashboard |
| `/board-papers/*` | `board-papers/...pdf` | Maharashtra State Board Exam Papers (Cached on Vercel CDN) |

---

## 🔄 Automatic Continuous Deployment (CI/CD)

Whenever you push code changes to GitHub:
```bash
git add .
git commit -m "Your update message"
git push origin main
```
Vercel will automatically trigger a new deployment and update your live production site within seconds.
