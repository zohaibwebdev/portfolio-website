# 👨‍💻 Personal Portfolio Website

A modern, responsive personal portfolio website built with **Next.js**. Showcasing my projects, skills, and experience — designed to be fast, accessible, and easy to customize.

> 🌐 **Live Demo:** [your-domain.com](https://your-domain.com)

---

## ✨ Features

- ⚡ **Next.js App Router** — server components, fast page loads, and optimized routing
- 🎨 **Fully responsive** — looks great on mobile, tablet, and desktop
- 🌙 **Dark / Light mode** — theme toggle with `next-themes`
- 🚀 **Performance optimized** — image optimization, code splitting, and lazy loading via Next.js
- 📝 **Easy content management** — update projects, skills, and bio from a single config/data file
- 🔍 **SEO-friendly** — metadata, Open Graph tags, and sitemap support
- ♿ **Accessible** — semantic HTML and keyboard-friendly navigation
- 🎞️ **Smooth animations** — subtle transitions powered by Framer Motion
- 📬 **Working contact form** — powered by an API route / third-party service

---

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Language | TypeScript / JavaScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Icons | React Icons / Lucide |
| Deployment | Vercel |
| Linting | ESLint + Prettier |

---

## 📁 Project Structure

```
portfolio/
├── app/                  # App Router pages & layouts
│   ├── page.tsx          # Home / Hero section
│   ├── about/            # About page
│   ├── projects/         # Projects listing
│   ├── contact/          # Contact page
│   └── api/              # API routes (contact form, etc.)
├── components/           # Reusable UI components
│   ├── ui/               # Buttons, cards, etc.
│   └── sections/         # Hero, Projects, Skills, Footer...
├── data/                 # Site content (projects, skills, socials)
├── public/               # Static assets (images, favicon, resume)
├── lib/                  # Utility functions
├── styles/               # Global styles
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm**, **yarn**, or **pnpm**

### 1. Clone the repository

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

Get the access key from your Web3Forms dashboard. Keep it server-side; do not
prefix it with `NEXT_PUBLIC_`.

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page will auto-reload as you edit.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build the production bundle |
| `npm run start` | Run the production build locally |
| `npm run lint` | Run ESLint |
| `npm run format` | Format code with Prettier |

---

## 🎨 Customization

### Update your content

All personal content is stored in the `data/` folder for easy editing:

```ts
// data/siteConfig.ts
export const siteConfig = {
  name: "Your Name",
  title: "Frontend Developer",
  email: "you@example.com",
  socials: {
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
  },
};
```

```ts
// data/projects.ts
export const projects = [
  {
    title: "Project Name",
    description: "A short description of what it does.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/your-username/project",
    live: "https://project-demo.com",
    image: "/projects/project-thumb.png",
  },
];
```

### Add / replace images

Drop your images into `public/` and reference them with an absolute path (e.g. `/projects/thumb.png`). Next.js `<Image />` handles optimization automatically.

### Update the resume

Replace `public/resume.pdf` with your latest CV.

### Change the theme

- **Colors** → edit `tailwind.config.ts` under `theme.extend.colors`
- **Fonts** → configure in `app/layout.tsx` using `next/font`
- **Global styles** → edit `styles/globals.css`

---

## 🌍 Deployment

### Vercel (recommended)

The easiest way to deploy a Next.js app is via [Vercel](https://vercel.com/new):

1. Push your code to GitHub.
2. Import the repo into Vercel.
3. Add your environment variables in the Vercel dashboard.
4. Deploy — done ✅

### Other platforms

This project also works on **Netlify**, **Cloudflare Pages**, or any Node.js host. For a static export, add `output: "export"` to `next.config.js` and deploy the `out/` folder.

---

## 🔍 SEO

- Metadata is defined per-page via the `metadata` export in `app/layout.tsx` and page files.
- Add your **Open Graph** image at `public/og-image.png`.
- The site is discoverable via search engines out of the box — update `sitemap.ts` and `robots.ts` if you add custom routes.

---

## 🤝 Contributing

This is a personal project, but if you spot a bug or have a suggestion, feel free to open an issue or submit a pull request.

---

## 📄 License

The **code** in this repository is licensed under the [MIT License](LICENSE).

The **personal content** (bio, project write-ups, images, and design) is © Your Name and may **not** be reused without permission.

---

## 🙏 Acknowledgements

- Inspired by the amazing Next.js and open-source community
- Icons by [Lucide](https://lucide.dev/) / [React Icons](https://react-icons.github.io/react-icons/)
- Deployment support by [Vercel](https://vercel.com/)

---

## ⭐ Show your support

If you like this portfolio and found the code helpful, give it a ⭐ — it's much appreciated!
