# Assets Guide

This document lists all the image assets in the `/public` folder and explains which ones you should replace with your own.

## 🔄 Assets to Replace

These assets contain personal branding and should be replaced with your own:

| File | Purpose | Recommended Size |
|------|---------|------------------|
| `favicon.ico` | Browser tab icon | 32x32 or 16x16 px |
| `ghcat.png` | Profile image (shown on hover) | 80x80 px |

## 🏢 Company/Institution Logos

Replace these with logos from your own experiences:

| File | Currently | Replace With |
|------|-----------|--------------|
| `uwaterloo_logo.jpeg` | University of Waterloo | Your university logo |
| `textql.jpg` | TextQL company | Your company logo |
| `ownrco_logo.jpeg` | Ownr company | Your company logo |
| `rbc.jpeg` | RBC bank | Your company logo |

**Logo recommendations:**
- Square images work best (1:1 aspect ratio)
- Size: 64x64 px or larger
- Formats: `.png`, `.jpg`, `.jpeg`, `.webp`
- Place in `/public/` root folder

## 📝 Blog Images

The `/public/blogs/` folder contains images for blog posts. You can:

1. **Keep existing blogs**: The images will work with the template blog posts
2. **Replace with your own**: Add your blog images in organized folders

### Current Blog Image Structure

```
public/blogs/
├── code/
│   └── iterm2.png           # Terminal screenshot
├── git/
│   ├── branches.png         # Git branches diagram
│   ├── commit-hash.png      # Commit hash example
│   ├── dag.png              # DAG diagram
│   ├── git-clone.png        # Clone example
│   ├── git-copy.png         # Git copy example
│   ├── git-diagram.png      # Git workflow diagram
│   ├── git-status.png       # Status output
│   └── staged-change.png    # Staging example
└── ontology/
    ├── adding-objects.jpeg  # Ontology objects
    ├── attrs.jpeg           # Attributes view
    ├── chat.png             # Chat interface
    ├── graphs.jpeg          # Graph visualization
    ├── map.jpeg             # Concept map
    ├── ontology.png         # Ontology diagram
    └── sources.png          # Data sources
```

## 🎨 Optional Assets

These can be kept or removed based on your needs:

| File | Purpose | Action |
|------|---------|--------|
| `white.svg` | Decorative SVG pattern | Keep or remove |
| `fonts/MinecraftRegular-Bmg3.otf` | Minecraft font | Keep (used for styling) |

## 📁 Adding New Assets

1. **Profile/Logo images**: Place directly in `/public/`
2. **Blog images**: Create a folder `/public/blogs/your-blog-name/`
3. **Reference in config**: Update paths in config files

### Example: Adding a New Company Logo

1. Add image: `/public/my-company.png`
2. Update `config/experience.config.ts`:
   ```typescript
   {
     name: "My Company",
     logo: "/my-company.png",  // Reference your new image
     // ...
   }
   ```

### Example: Adding Blog Images

1. Create folder: `/public/blogs/my-article/`
2. Add images: `/public/blogs/my-article/diagram.png`
3. Reference in blog page:
   ```tsx
   <img src="/blogs/my-article/diagram.png" alt="My diagram" />
   ```

## 🗑️ Cleaning Up

After customizing, you can safely delete unused assets:

```bash
# Remove example company logos (after adding your own)
rm public/uwaterloo_logo.jpeg
rm public/textql.jpg
rm public/ownrco_logo.jpeg
rm public/rbc.jpeg

# Remove blog images if not using those blogs
rm -rf public/blogs/code
rm -rf public/blogs/git
rm -rf public/blogs/ontology
```

## ✅ Checklist

Before deploying, ensure you have:

- [ ] Replaced `favicon.ico` with your icon
- [ ] Added your profile image and updated `profileConfig.profileImage`
- [ ] Added logos for all experiences in `experienceConfig`
- [ ] Added images for your blog posts (if any)
- [ ] Removed unused placeholder images (optional)

---

**Tip:** Use tools like [favicon.io](https://favicon.io/) to generate favicons from text or images.
