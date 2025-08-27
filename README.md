# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and Tailwind CSS 4. Features smooth animations, dark mode support, and a clean, professional design.

## 🚀 Features

- **Responsive Design**: Fully responsive across all device sizes
- **Modern Animations**: Smooth scroll animations, hover effects, and loading animations
- **Dark Mode**: Automatic dark/light mode based on system preference
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper meta tags and structured data
- **Accessible**: WCAG compliant with proper ARIA labels

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and animations
│   │   ├── layout.js        # Root layout with metadata
│   │   └── page.js          # Main page component
│   ├── components/
│   │   ├── Header.js        # Navigation header
│   │   └── Footer.js        # Footer with social links
│   └── sections/
│       ├── Hero.js          # Hero section with typing animation
│       ├── About.js         # About section with stats
│       ├── Skills.js        # Skills section with progress bars
│       ├── Projects.js      # Projects showcase
│       └── Contact.js       # Contact form and info
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🎨 Sections

### 1. Hero Section
- Animated typing text effect
- Call-to-action buttons
- Smooth scroll navigation
- Responsive profile placeholder

### 2. About Section
- Personal introduction
- Animated statistics cards
- Skill progress bars with gradient fills
- Intersection Observer animations

### 3. Skills Section
- Categorized skills (Frontend, Backend, Tools)
- Animated progress bars
- Hover effects on skill cards
- Responsive grid layout

### 4. Projects Section
- Project cards with hover animations
- Technology tags
- Live demo and source code links
- Featured projects highlighting

### 5. Contact Section
- Contact form with validation
- Social media links
- Contact information
- Success/error states

## 🛠️ Technologies Used

- **Framework**: Next.js 15.5.0
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Emoji icons (easily replaceable with SVG icons)
- **Animations**: Custom CSS animations + Tailwind utilities

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Customization

### Personal Information
Update the following files with your information:
- `src/sections/Hero.js` - Name and title
- `src/sections/About.js` - Bio and stats
- `src/sections/Contact.js` - Contact details
- `src/sections/Skills.js` - Skills and proficiency levels
- `src/sections/Projects.js` - Your actual projects
- `src/components/Footer.js` - Social links and copyright

### Styling
- Modify `src/app/globals.css` for custom animations
- Update color schemes in Tailwind classes throughout components
- Replace emoji icons with actual SVG icons from `public/` folder

### Adding New Sections
1. Create new component in `src/sections/`
2. Import and add to `src/app/page.js`
3. Add navigation link in `src/components/Header.js`

## 🌟 Animation Features

- **Scroll-triggered animations**: Components animate when they enter viewport
- **Hover effects**: Interactive elements respond to user interaction
- **Loading animations**: Smooth transitions and loading states
- **Typing effect**: Hero section text types out dynamically
- **Progress animations**: Skill bars fill with gradient colors

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile navigation
- Flexible grid layouts

## 🔧 Performance Optimizations

- Next.js Image optimization
- Code splitting and lazy loading
- Optimized CSS with Tailwind
- Minimal JavaScript bundle

## 📝 License

MIT License - feel free to use this template for your own portfolio!
