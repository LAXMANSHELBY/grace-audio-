# 🚀 Laxman Sunkari - 3D Interactive Portfolio

<div align="center">

A modern, interactive 3D portfolio website showcasing projects, skills, and experience. Built with **React**, **Three.js**, and **Tailwind CSS** for an immersive user experience.

[View Live](#deployment) • [Features](#features) • [Tech Stack](#tech-stack) • [Get Started](#quick-start)

</div>

---

## ✨ Features

- **🌌 3D Interactive Canvas** - Animated background with rotating Earth and star field using Three.js
- **🎨 Modern UI/UX** - Smooth animations and transitions with Framer Motion
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **📧 Contact Form** - EmailJS integration for direct messaging
- **🎯 Project Showcase** - Display of featured projects with descriptions and links
- **📊 Skills Dashboard** - Organized skill categories with visual icons
- **📜 Education & Experience** - Timeline view of professional journey
- **🔗 Social Integration** - Quick links to GitHub, LinkedIn, Twitter, and Instagram
- **⚡ Optimized Performance** - Fast loading with optimized assets and lazy loading

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Tailwind CSS** - Utility-first CSS framework
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **React Icons** - Icon library

### Tools & Services
- **EmailJS** - Email service integration
- **Vercel** - Deployment platform
- **React Router** - Client-side routing
- **React Scroll** - Smooth scrolling

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/LAXMANSHELBY/Myportfolio.git
cd Myportfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables** (if using EmailJS)
Create a `.env.local` file in the root directory:
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Start the development server**
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

### Development
```bash
npm start
# Runs the app in development mode
```

### Production Build
```bash
npm run build
# Creates an optimized production build
```

### Testing
```bash
npm test
# Launches the test runner
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation header
│   ├── canvas/
│   │   ├── Earth.jsx           # 3D Earth visualization
│   │   └── Stars.jsx           # Star field background
│   ├── cards/
│   │   ├── ProjectCard.jsx     # Project showcase card
│   │   ├── EducationCard.jsx   # Education timeline card
│   │   └── ExperienceCard.jsx  # Experience timeline card
│   ├── HeroBgAnimation/        # Hero section animation
│   └── sections/
│       ├── Hero.jsx            # Hero/landing section
│       ├── About.jsx           # About section
│       ├── Skills.jsx          # Skills showcase
│       ├── Experience.jsx      # Work experience
│       ├── Education.jsx       # Education timeline
│       ├── Projects.jsx        # Portfolio projects
│       ├── Contact.jsx         # Contact form
│       ├── Certifications.jsx  # Certifications section
│       └── Footer.jsx          # Footer
├── data/
│   └── constants.js            # Bio, skills, projects, education data
├── utils/
│   ├── motion.js               # Animation configurations
│   ├── Themes.js               # Theme/color configuration
├── assets/
│   └── projects/               # Project images
├── App.js                      # Main app component
├── index.js                    # Entry point
└── index.css                   # Global styles
```

---

## 🎨 Customization

### Update Your Information
Edit `src/data/constants.js` to customize:
- **Bio** - Name, roles, description, social links
- **Skills** - Programming languages and tools
- **Experiences** - Work experience and internships
- **Education** - Educational background
- **Projects** - Portfolio projects
- **Certifications** - Certificates and achievements

### Styling
- Modify theme colors in `src/utils/Themes.js`
- Update animations in `src/utils/motion.js`
- Customize component styles in respective component files

### Resume
Replace the PDF file in the `public/` folder:
- Update the path in `src/data/constants.js` if using a different filename

---

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop** (1440px and above)
- **Tablet** (768px to 1439px)
- **Mobile** (320px to 767px)

---

## 🚀 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy with one click

3. **Set Environment Variables** (if using EmailJS)
   - Add `REACT_APP_EMAILJS_SERVICE_ID`, `REACT_APP_EMAILJS_TEMPLATE_ID`, and `REACT_APP_EMAILJS_PUBLIC_KEY` in Vercel dashboard

---

## 📧 Contact

Get in touch with Laxman Sunkari:

- **GitHub**: [LAXMANSHELBY](https://github.com/LAXMANSHELBY)
- **LinkedIn**: [laxmansunkari](https://www.linkedin.com/in/laxmansunkari-2702eren)
- **Twitter**: [@Sakiji89897](https://x.com/Sakiji89897)
- **Instagram**: [@laxman.balu_7](https://www.instagram.com/laxman.balu_7?igsh=MXR1ejlycnl2bnkyMg==)

---

## 📄 Resume

Download my resume: [RenderCV_EngineeringResumes_Theme (6).pdf](/RenderCV_EngineeringResumes_Theme%20(6).pdf)

---

## 📜 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report issues
- Suggest improvements
- Submit pull requests

---

<div align="center">

**Made with ❤️ by Laxman Sunkari**

If you found this helpful, please give it a ⭐!

</div>
