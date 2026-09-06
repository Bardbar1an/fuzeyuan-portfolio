# Fu Zeyuan — Portfolio Website

Static portfolio site (HTML/CSS/JS, no build step). Source data: NTU transcript + resume.

```
website/
├── index.html              # single-page portfolio
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   ├── favicon.svg
│   └── Fu_Zeyuan_Resume.pdf   # resume linked from the navbar button
└── README.md
```

## Deploy to GitHub Pages (free)

### Option A — project site (recommended)

1. On github.com → **New repository** → name `fuzeyuan-portfolio` → **Public** → *do not* add README → Create.
2. In a terminal in this folder (`website/`):

   ```sh
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/Bardbar1an/fuzeyuan-portfolio.git
   git push -u origin main
   ```

3. GitHub → repo → **Settings → Pages** → under *Build and deployment*:
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)** → **Save**
4. Wait ~1 minute → site live at `https://bardbar1an.github.io/fuzeyuan-portfolio/`

### Option B — user site (root domain)

Use the same steps but name the repo exactly `bardbar1an.github.io`; the site then appears at `https://bardbar1an.github.io/`.

### No terminal? Use GitHub Desktop (easiest)

1. Install [GitHub Desktop](https://desktop.github.com/) and sign in.
2. **File → Add local repository…** → select this `website` folder.
3. Click **Publish repository** (Public, no issues/wiki needed).
4. Repo → **Settings → Pages** → same as step 3 above.

## Custom domain (optional)

1. Buy a domain (Namecheap / Cloudflare / GoDaddy).
2. In the repo: Settings → Pages → *Custom domain* → enter it → Save.
3. Add DNS records at your registrar:
   - `A` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - or `CNAME` → `bardbar1an.github.io`
4. Tick **Enforce HTTPS** once the certificate is issued (can take minutes–hours).

## Updating after changes

```sh
git add .
git commit -m "Update"
git push
```

GitHub Pages rebuilds automatically on push.
