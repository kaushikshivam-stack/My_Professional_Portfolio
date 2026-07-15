# Shivam Kaushik - Professional Interactive 3D Portfolio 🚀

Welcome to the repository of my personal portfolio website. This is a highly interactive, responsive, and modern developer portfolio built using React JS, Framer Motion, and Sass. It is designed to showcase my projects, skills, and professional journey as a Full Stack & AIML Engineer.

✨ **Live Demo:** [https://my-professional-portfolio-one.vercel.app/](https://my-professional-portfolio-one.vercel.app/)

---

## 🌟 Key Features

* **Custom Dark/Light Theme:** Toggles smoothly between a premium light mode and an immersive dark mode.
* **Interactive 3D Aesthetics:** Clean and modern UI with glassmorphism design and custom 3D vector graphics.
* **Header Typing Animation:** Dynamically cycles through key roles: *Full Stack Developer, AIML Engineer, React Specialist, UI/UX Builder, Node.js Engineer*.
* **Floating Handshake Widget:** A custom interactive social media tray (LinkedIn, Twitter, WhatsApp) that supports hover states on desktop and touch toggles on mobile screens.
* **Skills & Experience Timeline:** A responsive year-wise experience timeline (2024 - 2026) with hover tooltips for project details.
* **Responsive Work Showcase:** Filter projects dynamically by category (*UI/UX, Web App, Mobile App, React JS, All*) with smooth transitions and gesture-ready navigation on mobile.
* **Fully Responsive:** Optimized for desktops, laptops, tablets, and mobile devices.

---

## 🛠️ Tech Stack & Libraries

* **Frontend:** React JS (v17)
* **Animations:** Framer Motion
* **Styles:** Sass / Scss, Vanilla CSS
* **Database & Content Management:** Sanity CMS (or offline local fallback data)
* **Icons:** React Icons

---

## 🚀 Local Development Setup

To run this project locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/kaushikshivam-stack/My_Professional_Portfolio.git
cd My_Professional_Portfolio/project_professional_portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root of the project and add your Sanity Project ID:
```env
REACT_APP_SANITY_PROJECT_ID=your_sanity_project_id_here
```
*(Note: A local fallback project ID is already included in the source code so the app runs out-of-the-box even without a `.env` file).*

### 4. Run the Dev Server
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) (or the port shown in your terminal) to view it in the browser.

---

## 📦 Production Build & Deployment

To create an optimized production build:
```bash
npm run build
```

This project is configured for continuous deployment on **Vercel** via GitHub integration.

---

## 📄 License
Personal Portfolio Project. Feel free to use the code as inspiration for your own portfolio.
