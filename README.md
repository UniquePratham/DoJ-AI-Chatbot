<div align="center">
  <img src="/public/hero.png" alt="EchoJusticeAI Logo" width="120" height="120">
  
  # 🏛️ EchoJusticeAI
  
  **Your AI-Powered Companion for Legal Guidance and Justice**
  
  [![Next.js](https://img.shields.io/badge/Next.js-14.2.8-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Chakra UI](https://img.shields.io/badge/Chakra%20UI-2.8.2-319795?style=for-the-badge&logo=chakra-ui)](https://chakra-ui.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.3.28-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  [![Department of Justice](https://img.shields.io/badge/DoJ-India-FF6B35?style=for-the-badge)](https://doj.gov.in/)
  
  <p align="center">
    <a href="#-features">Features</a> •
    <a href="#-demo">Demo</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-screenshots">Screenshots</a> •
    <a href="#-contributing">Contributing</a>
  </p>
</div>

---

## 📋 Table of Contents

- [🌟 About EchoJusticeAI](#-about-echojusticeai)
- [✨ Features](#-features)
- [🚀 Demo](#-demo)
- [🛠️ Getting Started](#️-getting-started)
- [💻 Tech Stack](#-tech-stack)
- [📸 Screenshots](#-screenshots)
- [🏗️ Project Structure](#️-project-structure)
- [🎨 Design System](#-design-system)
- [📱 Responsive Design](#-responsive-design)
- [🔧 API Integration](#-api-integration)
- [🧪 Testing](#-testing)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 About the Developer](#-about-the-developer)

---

## 🌟 About EchoJusticeAI

EchoJusticeAI is a cutting-edge AI-powered legal assistance platform developed for the **Department of Justice, India**. Our mission is to democratize access to legal information and guidance, making justice accessible to everyone regardless of their background or circumstances.

### 🎯 Mission Statement

> "Empowering justice through artificial intelligence - Making legal assistance accessible, affordable, and available to everyone, everywhere."

### 🌍 Vision

To create a world where legal guidance is not a privilege but a right, accessible through the power of AI technology.

---

## ✨ Features

### 🤖 AI-Powered Legal Assistance
- **Intelligent Query Processing**: Natural language understanding for complex legal questions
- **Personalized Guidance**: Tailored responses based on user's specific situation
- **24/7 Availability**: Round-the-clock legal assistance without time constraints
- **Multi-jurisdictional Support**: Coverage of various legal areas and jurisdictions

### 🛡️ Privacy & Security
- **End-to-End Encryption**: Industry-leading AES-256 encryption protocols
- **GDPR Compliant**: Full compliance with international data protection standards
- **Confidential Conversations**: All interactions remain private and secure
- **Data Control**: Users have full control over their data and conversation history

### 📚 Comprehensive Legal Coverage
- **Family Law**: Divorce proceedings, custody disputes, marriage laws
- **Personal Injury**: Accident claims, compensation guidance
- **Contract Law**: Contract reviews, legal obligations, dispute resolution
- **Criminal Law**: Rights awareness, legal procedures
- **Employment Law**: Workplace rights, labor disputes
- **Real Estate**: Property rights, landlord-tenant issues

### 🎨 Modern User Experience
- **Glassmorphism Design**: Beautiful, modern UI with glass-like effects
- **Smooth Animations**: Framer Motion powered micro-interactions
- **Responsive Design**: Seamless experience across all devices
- **Dark Theme**: Easy-on-eyes design for extended usage
- **Accessibility**: WCAG 2.1 compliant for inclusive access

---

## 🚀 Demo

### 🌐 Live Demo
[**Try EchoJusticeAI Live**](https://echojusticeai.vercel.app) 

### 📺 Video Walkthrough
*Coming Soon - Interactive demo video showcasing key features*

### 🖼️ Homepage Preview
![EchoJusticeAI Homepage](/public/homepage-screenshot.png)
*Modern, responsive design with intuitive navigation and engaging visuals*

---

## 🛠️ Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

```bash
Node.js >= 18.0.0
npm >= 8.0.0
# or
yarn >= 1.22.0
```

### ⚡ Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/doj-india/echojusticeai.git
cd echojusticeai
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### 🔧 Environment Configuration

Create a `.env.local` file in the root directory:

```env
# API Configuration
NEXT_PUBLIC_API_URL=your_api_endpoint
OPENAI_API_KEY=your_openai_api_key

# Database Configuration
DATABASE_URL=your_database_url

# Authentication
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

# Analytics (Optional)
GOOGLE_ANALYTICS_ID=your_ga_id
```

---

## 💻 Tech Stack

### 🏗️ Core Framework
- **[Next.js 14.2.8](https://nextjs.org/)** - React framework for production
- **[React 18](https://reactjs.org/)** - UI library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### 🎨 UI/UX
- **[Chakra UI](https://chakra-ui.com/)** - Modular and accessible component library
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Popular icons library

### 🤖 AI Integration
- **[OpenAI GPT-4](https://openai.com/)** - Advanced language model for legal queries
- **[Langchain](https://langchain.readthedocs.io/)** - Framework for LLM applications
- **[Pinecone](https://www.pinecone.io/)** - Vector database for semantic search

### 🗄️ Database & Storage
- **[PostgreSQL](https://www.postgresql.org/)** - Primary database
- **[Prisma](https://www.prisma.io/)** - Database ORM
- **[Cloudinary](https://cloudinary.com/)** - Media storage and optimization

### 🔐 Authentication & Security
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication for Next.js
- **[bcrypt](https://github.com/kelektiv/node.bcrypt.js)** - Password hashing
- **[helmet](https://helmetjs.github.io/)** - Security middleware

---

## 📸 Screenshots

<div align="center">

### 🏠 Homepage
![Homepage](https://via.placeholder.com/800x600/1a202c/ffffff?text=Homepage+Screenshot)
*Modern hero section with three-column layout featuring AI assistant preview*

### ⚡ Features Section
![Features](https://via.placeholder.com/800x600/2d3748/ffffff?text=Features+Section)
*Interactive 3D cards with flip animations showcasing key capabilities*

### 📚 Examples Section
![Examples](https://via.placeholder.com/800x600/4a5568/ffffff?text=Examples+Section)
*Real-world legal scenarios with beautiful blob-shaped image containers*

### ❓ FAQ Section
![FAQ](https://via.placeholder.com/800x600/718096/ffffff?text=FAQ+Section)
*Comprehensive Q&A with tabbed navigation and smooth accordions*

### 📞 Call to Action
![CTA](https://via.placeholder.com/800x600/a0aec0/000000?text=Call+to+Action)
*Interactive demo options and mobile app coming soon section*

</div>

---

## 🏗️ Project Structure

```
📁 echojusticeai/
├── 📁 components/           # Reusable UI components
│   ├── CallToAction.js      # Demo and CTA section
│   ├── Examples.js          # Legal scenarios showcase
│   ├── FAQ.js               # Frequently asked questions
│   ├── Features.js          # Key features with 3D cards
│   ├── Footer.js            # Site footer with links
│   ├── HeroSection.js       # Landing page hero
│   └── Navbar.js            # Navigation header
├── 📁 pages/                # Next.js pages
│   ├── api/                 # API routes
│   ├── _app.js              # App configuration
│   ├── _document.js         # HTML document structure
│   └── index.js             # Homepage
├── 📁 public/               # Static assets
│   ├── images/              # Image assets
│   └── icons/               # Icon files
├── 📁 styles/               # Global styles
├── 📁 utils/                # Utility functions
├── 📁 lib/                  # Library configurations
└── 📄 README.md             # Project documentation
```

---

## 🎨 Design System

### 🎨 Color Palette
```css
/* Primary Colors */
--teal-500: #38B2AC     /* Primary brand color */
--cyan-400: #22D3EE     /* Accent color */
--gray-900: #1A202C     /* Dark background */

/* Gradients */
--primary-gradient: linear-gradient(135deg, #38B2AC, #22D3EE)
--dark-gradient: linear-gradient(135deg, #1A202C, #2D3748)
```

### 📝 Typography
- **Headings**: Inter (800-900 weight)
- **Body**: Inter (400-600 weight)
- **Code**: JetBrains Mono

### 🎭 Animation Principles
- **Duration**: 0.3s for micro-interactions, 0.6s for page transitions
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) for smooth motion
- **Spring Physics**: Used for natural feeling animations

---

## 📱 Responsive Design

### 📐 Breakpoints
```javascript
const breakpoints = {
  base: '0px',    // Mobile
  sm: '480px',    // Small mobile
  md: '768px',    // Tablet
  lg: '992px',    // Desktop
  xl: '1280px',   // Large desktop
}
```

### 📱 Mobile-First Approach
- Progressive enhancement from mobile to desktop
- Touch-friendly interactions
- Optimized performance on mobile devices
- Responsive typography and spacing

---

## 🔧 API Integration

### 🤖 AI Chat Endpoint
```javascript
POST /api/chat
Content-Type: application/json

{
  "message": "I need help with a divorce case",
  "context": "family_law",
  "userId": "user123"
}
```

### 📊 Analytics Tracking
```javascript
// Track user interactions
POST /api/analytics/track
{
  "event": "feature_interaction",
  "properties": {
    "feature": "faq_search",
    "query": "data privacy"
  }
}
```

---

## 🧪 Testing

### 🛠️ Testing Stack
- **[Jest](https://jestjs.io/)** - JavaScript testing framework
- **[React Testing Library](https://testing-library.com/)** - React component testing
- **[Cypress](https://www.cypress.io/)** - End-to-end testing

### ▶️ Running Tests
```bash
# Run unit tests
npm run test

# Run e2e tests
npm run cypress:open

# Run all tests with coverage
npm run test:coverage
```

---

## 🚀 Deployment

### 🌐 Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel --prod
```

### 🐳 Docker Deployment
```dockerfile
# Dockerfile included in repository
docker build -t echojusticeai .
docker run -p 3000:3000 echojusticeai
```

### ☁️ Cloud Platforms
- **Vercel** (Recommended for Next.js)
- **Netlify** (JAMstack deployment)
- **AWS Amplify** (Full-stack deployment)
- **Google Cloud Run** (Containerized deployment)

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🔄 Contributing Process

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests** for new functionality
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### 📋 Contribution Guidelines

- Follow the existing code style
- Write clear commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

### 🐛 Bug Reports

Use our [issue template](.github/ISSUE_TEMPLATE.md) to report bugs with:
- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Environment details

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
Copyright (c) 2024 Department of Justice, India
```

---

## 👨‍💻 About the Developer

<div align="center">
  <img src="https://via.placeholder.com/120x120/4a5568/ffffff?text=Dev" alt="Developer" width="120" height="120" style="border-radius: 50%;">
  
  ### GitHub Copilot Enhanced Development
  
  **Built with AI assistance for the Department of Justice, India**
  
  [![GitHub](https://img.shields.io/badge/GitHub-DoJ--India-181717?style=for-the-badge&logo=github)](https://github.com/doj-india)
  [![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail)](mailto:tech@doj.gov.in)
  
</div>

---

## 🙏 Acknowledgments

- **Department of Justice, India** for supporting this initiative
- **OpenAI** for providing advanced AI capabilities
- **Vercel** for hosting and deployment platform
- **The open-source community** for the amazing tools and libraries

---

## 🔗 Quick Links

- [🌐 Live Demo](https://echojusticeai.vercel.app)
- [📚 Documentation](https://docs.echojusticeai.gov.in)
- [🐛 Report Bug](https://github.com/doj-india/echojusticeai/issues)
- [💡 Request Feature](https://github.com/doj-india/echojusticeai/issues)
- [💬 Discussions](https://github.com/doj-india/echojusticeai/discussions)

---

<div align="center">
  <p><strong>Made with ❤️ for Justice and Technology</strong></p>
  <p>© 2024 Department of Justice, India. All rights reserved.</p>
</div>
