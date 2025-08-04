# Factory Dashboard

A modern React-based dashboard application for factory management, converted from a Figma design. This application provides a clean and intuitive interface for monitoring factory plants and their operations.

## Features

- **Responsive Design**: Built with Tailwind CSS for a modern, responsive layout
- **Component-Based Architecture**: Modular React components for easy maintenance
- **TypeScript Support**: Full TypeScript implementation for better development experience
- **Modern UI**: Clean, dark-themed interface with proper spacing and typography
- **Icon Integration**: Uses Lucide React for consistent iconography

## Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx   # Main dashboard layout
│   ├── HeroSection.tsx # Hero section with company info
│   ├── PlantCard.tsx   # Individual plant card component
│   ├── Sidebar.tsx     # Navigation sidebar
│   └── TopNav.tsx      # Top navigation bar
├── data/               # Static data
│   └── plants.ts       # Plant information
├── types/              # TypeScript type definitions
│   └── index.ts        # Application types
├── utils/              # Utility functions
│   └── dateUtils.ts    # Date formatting utilities
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## Components

### Sidebar
- Navigation menu with icons and labels
- Active state management
- Hover effects and transitions

### TopNav
- Company logo and branding
- Search functionality
- Notification system with badges
- User profile section

### Dashboard
- Main content area
- Hero section with company overview
- Plant cards grid layout
- Date display

### PlantCard
- Individual plant information display
- Location and building count
- Plant image showcase
- Action buttons

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful icon library

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd factory-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Design System

### Colors
- Primary: `#087aa2` (Deep Cerulean)
- Primary Dark: `#172a4f` (Bunting)
- Gray Scale: From `#ffffff` to `#0f0f0f`
- Accent Colors: Red (`#c71606`), Yellow (`#e0bb00`), Cyan (`#00a5cf`)

### Typography
- **Manrope**: Primary font family for headings and body text
- **Inter**: Secondary font for specific UI elements

### Spacing
- Consistent spacing system using Tailwind's spacing scale
- Custom spacing values for specific design requirements

## Development Practices

### Code Organization
- Components are organized by feature
- TypeScript interfaces for type safety
- Utility functions for reusable logic
- Static data separated from components

### Styling
- Tailwind CSS for utility-first styling
- Custom CSS classes for complex components
- Responsive design with mobile-first approach

### Performance
- Lazy loading for images
- Optimized bundle size with Vite
- Efficient component rendering

## Future Enhancements

- [ ] Add authentication system
- [ ] Implement real-time data updates
- [ ] Add more detailed plant analytics
- [ ] Create mobile-responsive navigation
- [ ] Add dark/light theme toggle
- [ ] Implement search functionality
- [ ] Add plant management features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License. 