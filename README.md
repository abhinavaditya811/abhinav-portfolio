# Personal Portfolio Website Template

A modern, customizable personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark theme and easy deployment to Vercel.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## ⚙️ Configuration

All personal information is configured through files in the `/config` folder. **No code changes required** - just update these config files with your information!

### Configuration Files

| File | Purpose |
|------|---------|
| `config/site.config.ts` | Site metadata, SEO, Google Analytics |
| `config/profile.config.ts` | Your name, social links, profile image |
| `config/experience.config.ts` | Education and work experience |
| `config/projects.config.ts` | Your projects list |
| `config/blogs.config.ts` | Blog posts configuration |

### Step-by-Step Customization

#### 1. Site Configuration (`config/site.config.ts`)

```typescript
export const siteConfig = {
  metadata: {
    title: "Your Name - Portfolio",           // Browser tab title
    description: "Your portfolio description", // SEO description
    author: "Your Name",
    siteUrl: "https://yoursite.com",          // Your deployed URL
    twitterHandle: "@yourusername",           // For Twitter cards
  },
  googleAnalyticsId: "G-XXXXXXXXXX",          // Optional: your GA ID
  features: {
    blogs: true,             // Show blog section
    neighborLinks: false,    // Show friend website links
  },
};
```

#### 2. Profile Configuration (`config/profile.config.ts`)

```typescript
export const profileConfig = {
  name: {
    full: "Your Full Name",
    short: "yourname",      // Displayed in hero section
    extraChars: "",         // Typing animation (e.g., "athan" for "john" → "johnathan")
  },
  greeting: {
    en: "hi im",
  },
  social: {
    email: "your@email.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "https://x.com/yourusername",
  },
  profileImage: "/your-profile.png",  // Place in /public folder
};
```

#### 3. Experience Configuration (`config/experience.config.ts`)

Add your education and work experience:

```typescript
export const experienceConfig = {
  current: {
    title: { en: "Currently" },
    items: [
      {
        name: "Your University",
        role: { en: "Computer Science" },
        subtitle: { en: "University Name" },
        url: "https://university.edu",
        logo: "/university-logo.png",  // Place in /public folder
      },
    ],
  },
  previous: {
    title: { en: "Previously" },
    items: [
      {
        name: "Company Name",
        role: { en: "Software Engineer Intern" },
        subtitle: { en: "Company Name" },
        url: "https://company.com",
        logo: "/company-logo.png",
      },
    ],
  },
};
```

#### 4. Projects Configuration (`config/projects.config.ts`)

```typescript
export const projectsConfig = {
  title: { en: "Projects" },
  items: [
    {
      name: { en: "Project Name" },
      url: "https://github.com/yourusername/project",
      description: { en: "Brief description" },
    },
  ],
};
```

#### 5. Blogs Configuration (`config/blogs.config.ts`)

```typescript
export const blogsConfig = {
  title: { en: "Writing" },
  items: [
    {
      id: "blog-slug",           // Used in URL: /blogs/blog-slug
      title: { en: "Blog Title" },
      meta: { en: "Your Name · Date · X min read" },
      enabled: true,
    },
  ],
};
```

### Adding Images

Place all images in the `/public` folder:
- Profile image: `/public/your-profile.png`
- Company logos: `/public/company-logo.png`
- Blog images: `/public/blogs/your-blog/image.png`

## 📝 Blog Posts

Blog posts are located in `/app/blogs/[blog-id]/page.tsx`. 

To add a new blog:
1. Create a new folder: `/app/blogs/your-blog-slug/`
2. Add a `page.tsx` file (copy from existing blog as template)
3. Add the blog to `config/blogs.config.ts`

To remove a blog:
- Set `enabled: false` in `config/blogs.config.ts`, or
- Delete the folder from `/app/blogs/`

## 🚀 Deployment to Vercel

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Option 2: Deploy via GitHub

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Set up custom domain (optional)**
   - Go to your project settings on Vercel
   - Navigate to "Domains"
   - Add your custom domain

### Environment Variables (Optional)

If you need environment variables, add them in Vercel:
- Go to Project Settings → Environment Variables
- Add your variables

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run test     # Run tests
```

### Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── blogs/             # Blog pages
├── config/                 # ⭐ Configuration files (edit these!)
│   ├── site.config.ts
│   ├── profile.config.ts
│   ├── experience.config.ts
│   ├── projects.config.ts
│   ├── blogs.config.ts
│   └── index.ts
├── contexts/              # React contexts
│   └── LanguageContext.tsx
├── public/                # Static assets
└── tests/                 # Test files
```

### Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: JetBrains Mono
- **Deployment**: Vercel

## 🌐 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark Theme** - Modern dark aesthetic
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter cards
- ✅ **Google Analytics** - Optional tracking
- ✅ **Fast** - Optimized for performance
- ✅ **Accessible** - Semantic HTML, ARIA labels

## 📄 License

This project is open source and available for personal use.

---

**Need help?** Open an issue on GitHub or reach out!
