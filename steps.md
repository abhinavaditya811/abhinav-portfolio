### Steps to Complete Your Portfolio Website

Your codebase is now cleaned up and ready for customization. Here's exactly what you need to do next:

---

### Step 1: Fill Out `custom.md`

Open the `custom.md` file in your project root and fill in all your personal information:
- Your name, email, social links (LinkedIn, GitHub, Twitter)
- Your education and work experience details
- Your projects
- Which blog posts you want to enable

---

### Step 2: Update Config Files

After filling out `custom.md`, update these config files in the `/config` folder:

| File | What to Update |
|------|----------------|
| `site.config.ts` | Site title, description, SEO metadata, Google Analytics ID |
| `profile.config.ts` | Your name, profile image, social links |
| `experience.config.ts` | Education and work history |
| `projects.config.ts` | Your projects with links |
| `blogs.config.ts` | Enable/disable blog posts |

---

### Step 3: Add Your Images

Place these files in the `/public/` folder:
- Your profile picture (e.g., `profile.png`)
- Your favicon (`favicon.ico`)
- Company/university logos for your experience section
- Any blog images in `/public/blogs/[blog-id]/`

---

### Step 4: Test Locally

```bash
cd nicholas-personal-website-main
npm run dev
```

Open `http://localhost:3000` to preview your site.

---

### Step 5: Build and Verify

```bash
npm run build
```

Make sure there are no errors before deploying.

---

### Step 6: Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the prompts to deploy.

#### Option B: Using Vercel Dashboard (Recommended)
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click **"Add New Project"** → **Import** your repository

4. Vercel will auto-detect Next.js settings. Click **Deploy**

5. Your site will be live at `https://your-project.vercel.app`

---

### Step 7: (Optional) Custom Domain

1. In Vercel dashboard, go to your project → **Settings** → **Domains**
2. Add your custom domain (e.g., `yourdomain.com`)
3. Update DNS records at your domain registrar:
   - Add an A record pointing to `76.76.21.21`
   - Or add a CNAME record pointing to `cname.vercel-dns.com`

---

### Quick Checklist

- [ ] Fill out `custom.md` with your info
- [ ] Update all 5 config files
- [ ] Add profile image and logos to `/public/`
- [ ] Test locally with `npm run dev`
- [ ] Build with `npm run build`
- [ ] Push to GitHub
- [ ] Deploy on Vercel
- [ ] (Optional) Connect custom domain

---

### Important Notes

- **Blog Content**: The "how-i-learned-to-code" blog is currently disabled because it contains personal content. If you want to use it, rewrite the content in `config/translations.config.ts` under the `blog.coding.*` keys.

- **The Git and Ontology blogs** are generic technical content that you can keep as-is or customize.

- **Rename the folder** from `nicholas-personal-website-main` to something like `my-portfolio` before pushing to GitHub to avoid any confusion.

You're all set! 🚀