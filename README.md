# CloudTrail Project

A modern React application platform empowering Sahrawi refugees through digital skills and remote work opportunities.

## About

The CloudTrail Project is dedicated to supporting Sahrawi refugees by providing them with access to digital education, skills development, and remote work opportunities. This website serves as the primary platform to showcase our mission, impact, and ways to get involved.

## Features

- **Modern Design**: Built with React, TypeScript, and Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **Animated**: Smooth animations powered by Framer Motion
- **Fast**: Built with Vite for optimal performance
- **Accessible**: Designed with accessibility in mind

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Code Quality**: Biome for linting and formatting

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Bun (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ChejAhamed/cloud-trail-project.git
cd cloud-trail-project
```

2. Install dependencies:
```bash
bun install
```

3. Start the development server:
```bash
bun dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun lint` - Run linter and type checking
- `bun format` - Format code with Biome
- `bun preview` - Preview production build

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Impact.tsx      # Impact metrics
│   ├── ThreePillars.tsx # Core pillars section
│   ├── Testimonial.tsx # Testimonials
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Deployment

This project is configured for deployment on Netlify with the included `netlify.toml` configuration file.

To deploy:
1. Build the project: `bun build`
2. Deploy the `dist` folder to your hosting platform

## Contributing

We welcome contributions to improve the CloudTrail Project website. Please feel free to submit issues and pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For more information about the CloudTrail Project, please visit our website or contact us through the form on the site.

---

Built with ❤️ for the Sahrawi refugee community