# Inertia.js Integration Guide

## Overview
This codebase has been structured to be compatible with Inertia.js projects. The components are designed to work as standalone React components that can be imported into your Inertia pages.

## Hero Component Usage

### In Your Inertia Controller (Laravel Example)

```php
// routes/web.php
Route::get('/', function () {
    return Inertia::render('Home', [
        'loginUrl' => route('login'),
        'registerUrl' => route('register'),
        'marketplaceUrl' => route('marketplace'),
    ]);
});
```

### In Your Inertia Page Component

```tsx
// resources/js/Pages/Home.tsx
import { Head } from '@inertiajs/react';
import Hero from '@/Components/Hero';

interface HomeProps {
  loginUrl: string;
  registerUrl: string;
  marketplaceUrl: string;
}

export default function Home({ loginUrl, registerUrl, marketplaceUrl }: HomeProps) {
  return (
    <>
      <Head title="FabricStockHub - Home" />
      <Hero 
        loginUrl={loginUrl}
        registerUrl={registerUrl}
        marketplaceUrl={marketplaceUrl}
      />
    </>
  );
}
```

### Using with Inertia's Link Component

If you prefer to use Inertia's Link component for navigation:

```tsx
import { router } from '@inertiajs/react';
import Hero from '@/Components/Hero';

export default function Home() {
  return (
    <Hero 
      onLoginClick={() => router.visit('/login')}
      onRegisterClick={() => router.visit('/register')}
      onMarketplaceClick={() => router.visit('/marketplace')}
    />
  );
}
```

## Files to Copy to Your Inertia Project

### Required Files

1. **Component Files:**
   - `src/components/Hero.tsx`
   - `src/components/ui/button.tsx`
   - All files in `src/components/ui/` (shadcn components)

2. **Style Files:**
   - `src/index.css` (design system tokens)
   - `tailwind.config.ts`

3. **Utility Files:**
   - `src/lib/utils.ts`

4. **Assets:**
   - `src/assets/hero-background.png`

### Dependencies to Install

```bash
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge tailwindcss-animate
```

## Design System

The project uses a complete design system defined in `index.css` with HSL color tokens:

- `--primary`: Main brand color (#2596be)
- `--dark`: Dark background
- `--light`: Light elements
- Custom gradients and shadows

All components use these semantic tokens instead of hardcoded colors.

## Button Variants

The Button component includes custom variants for this project:

- `glass`: Glassmorphism effect with backdrop blur
- `hero`: Primary action button with hover effects

## Responsive Design

All components are fully responsive with mobile-first breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

## TypeScript Support

All components are fully typed with TypeScript interfaces for props.

## Notes for Laravel + Inertia

1. Update the import paths from `@/` to match your Laravel Inertia setup (usually `@/` maps to `resources/js/`)
2. Move the components to `resources/js/Components/`
3. Update the tailwind config in your Laravel project
4. Copy the design tokens from `index.css` to your main CSS file
5. Make sure your Vite config resolves the `@` alias correctly

## Example Directory Structure (Laravel)

```
resources/js/
├── Components/
│   ├── Hero.tsx
│   └── ui/
│       └── button.tsx
├── Pages/
│   └── Home.tsx
├── lib/
│   └── utils.ts
└── app.css (import index.css content here)
```
