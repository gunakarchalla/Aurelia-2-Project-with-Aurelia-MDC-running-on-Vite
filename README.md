# Aurelia MDC Memory Game

A memory card game built with **Aurelia 2** and **Material Design Components (MDC)** running on **Vite**. This project demonstrates the integration of Aurelia 2 with MDC components using the `@aurelia-mdc-web/all` package - a combination that has limited documentation and resources available.

## 🎯 Project Highlights

- **Aurelia 2** - Modern TypeScript framework
- **Material Design Components** - Via `@aurelia-mdc-web/all` package
- **Vite** - Lightning-fast build tool and dev server
- **TypeScript** - Full type safety
- **SCSS** - Advanced styling with Material Design theming
- **Vitest** - Modern testing framework

## 🎮 Game Features

- Classic memory card matching game
- Material Design UI components (buttons, progress indicators)
- Score tracking with miss counter
- Progress visualization
- Responsive grid layout
- Card flip animations and interactions

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd no_mdc

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm start
```

The application will open at `http://localhost:9000`

### Building for Production

```bash
# Build the application
npm run build
```

### Testing

```bash
# Run tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run linting
npm run lint
```

## 🏗️ Project Structure

```
src/
├── main.ts              # Application entry point
├── my-app.ts           # Main application component
├── my-app.html         # Application template
├── my-app.scss         # Application styles
├── resources/
│   └── score-counter.ts # Score tracking service
├── styles/
│   └── mdc.scss        # Material Design theme configuration
└── views/
    ├── card.ts         # Memory card component
    ├── card.html       # Card template
    └── card.css        # Card styles
```

## 🎨 Material Design Integration

This project uses `@aurelia-mdc-web/all` which provides Aurelia 2 bindings for Material Design Components. The integration includes:

### Theme Configuration
```scss
@use "@material/theme" with (
    $primary: #4b4b4b,
    $secondary: #f6a821,
    $on-primary: #ffffff,
    $on-secondary: #ffffff,
);

@use "@aurelia-mdc-web/all";
```

### Components Used
- `mdc-button` - Material Design buttons
- `mdc-linear-progress` - Progress indicators
- Material typography classes

## 🔧 Technical Implementation

### Aurelia 2 Features
- **Dependency Injection** - Using `@inject()` decorator
- **Data Binding** - Two-way binding with `.bind`
- **Event Handling** - Click triggers with `.trigger`
- **Templating** - Conditional rendering with `show.bind`
- **Repeaters** - Dynamic lists with `repeat.for`

### Vite Configuration
- Custom SCSS preprocessing
- Aurelia plugin integration
- Development server configuration
- Node polyfills support

### Testing Setup
- Vitest with jsdom environment
- Aurelia testing utilities
- Component testing examples

## 🎯 Game Logic

1. **Initialization** - Generates pairs of cards with symbols A-H
2. **Shuffle** - Randomizes card positions
3. **Reveal** - Shows all cards briefly, then hides them
4. **Matching** - Players click cards to find matching pairs
5. **Scoring** - Tracks misses and calculates progress

## 📚 Why This Project Matters

This project addresses a significant gap in available resources for combining:
- **Aurelia 2** (modern but less documented than v1)
- **Material Design Components** for Aurelia 2
- **Vite** as a build tool for Aurelia projects

The `@aurelia-mdc-web/all` package provides comprehensive MDC bindings but lacks extensive documentation and examples, making this project a valuable reference implementation.

## 🛠️ Development Notes

### Key Dependencies
- `aurelia@2.0.0-beta.20` - Core framework
- `@aurelia-mdc-web/all@^9.2.2-au2` - Material Design Components
- `@aurelia/vite-plugin@2.0.0-beta.20` - Vite integration
- `vite@^5.2.12` - Build tool and dev server

### Configuration Files
- `vite.config.ts` - Vite and plugin configuration
- `tsconfig.json` - TypeScript compiler options
- `vitest.config.ts` - Testing configuration
- `.eslintrc.json` - Code linting rules

## 📝 License

UNLICENSED

## 🤝 Contributing

This project serves as a reference implementation. Contributions that improve the documentation or demonstrate additional Aurelia 2 + MDC integration patterns are welcome.
