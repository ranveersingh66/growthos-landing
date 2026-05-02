# GrowthOS Landing Page

Static landing page for GrowthOS, split into HTML, CSS, and JavaScript.

## Project Structure

```text
growthos/
├── public/
│   ├── favicon.ico
│   └── og-image.png
├── src/
│   ├── index.html
│   ├── styles/main.css
│   └── scripts/main.js
├── README.md
└── package.json
```

## Run Locally

```bash
npm install
npm run dev
```

## Send Form Submissions To Email

The CTA form is wired through FormSubmit, which lets a static site send submissions to an email inbox without a backend.

1. Open `src/index.html`.
2. The form currently sends to `growthos.info@gmail.com`; replace that email in the form `action` if needed.
3. Submit the form once.
4. Confirm the activation email from FormSubmit in that inbox.

After that, new demo requests will be sent directly to your inbox.

## SEO Setup Before Publishing

The page currently uses `https://growthos.com/` for the canonical URL, Open Graph URL, structured data URL, `robots.txt`, and `sitemap.xml`.

If your live domain is different, replace `https://growthos.com/` everywhere before deploying.
