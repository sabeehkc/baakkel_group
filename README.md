# Baakkel Group - Construction Company Website

A modern, responsive single-page React website for Baakkel Group construction company, built with React, Vite, and Tailwind CSS.

## Features

- 🏠 **Home** - Eye-catching hero section with company branding
- 🧰 **Services** - Showcase of construction services
- 🏗️ **Projects/Gallery** - Portfolio of completed projects
- 👷 **About Us** - Company information, values, and statistics
- 📞 **Contact** - Contact form with Google Maps integration
- 📰 **Blog** - Latest news and updates section

## Technology Stack

- **React** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Router DOM** - Navigation (for future expansion)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
baakkel_group/
├── public/
│   └── logo.png (add your company logo here)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Customization

### Adding Your Logo

1. Place your company logo in the `public/` folder as `logo.png`
2. The logo will automatically be displayed in the header and hero section

### Updating Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    teal: '#00CED1',
    cyan: '#00BFFF',
    'dark-blue': '#1E3A5F',
    'darker-blue': '#0F1F3A',
  },
}
```

### Updating Google Maps

In `src/components/Contact.jsx`, update the Google Maps embed URL with your actual business location.

### Updating Content

Edit the respective component files in `src/components/` to update text, images, and other content.

## License

This project is private and proprietary to Baakkel Group.

