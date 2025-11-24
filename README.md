# Investment Calculator (Angular)

Small Angular app that calculates investment growth. Built as part of an Angular course — includes a simple UI, input model, result component, and a service to manage results.

## Features

- Input form for investment parameters (amount, duration, interest, etc.)
- Calculation of periodic/yearly results
- Result list and simple service for storing/displaying results
- Clean, component-based structure

## Tech

- Angular (vX — check package.json)
- TypeScript
- HTML / CSS
- Node.js / npm for tooling

## Project structure (important files)

- src/
  - index.html
  - main.ts
  - styles.css
  - app/
    - app.component.ts / app.component.html
    - header/
      - header.component.ts / header.component.html / header.component.css
    - investment/
      - investment-calculator.component.ts / .html / .css
      - investmentData.model.ts
      - investment-result/
        - investment-result.component.ts / .html / .css
        - investment-result.model.ts
        - investment-results.service.ts

## Prerequisites

- Node.js (recommended LTS)
- npm (comes with Node)
- Angular CLI (optional, for local serve/build): npm install -g @angular/cli

## Setup (Windows)

Open a terminal (PowerShell or cmd) at the project root:

1. Install dependencies
   ```
   npm install
   ```
2. Run development server
   ```
   ng serve --open
   ```
   or if Angular CLI is not global:
   ```
   npx ng serve --open
   ```

The app will open at http://localhost:4200 by default.

## Build for production

```
ng build --configuration production
```

or

```
npx ng build --configuration production
```

Built files will be in the `dist/` folder.

## Tests / Lint

This project template may not include tests. If you add Karma/Jasmine or Jest, run:

```
ng test
```

and for linting (if configured):

```
ng lint
```

## Where to change things

- UI / layout: edit component HTML/CSS in `src/app/**`
- Calculation logic: `src/app/investment/investment-calculator.component.ts`
- Result models & service: `src/app/investment/investment-result/`

## Extending

- Add form validation with Angular Reactive Forms
- Persist results to localStorage or backend by enhancing `investment-results.service.ts`
- Add unit tests for components and services

## Troubleshooting

- If `ng` is not recognized, use `npx ng ...` or install Angular CLI globally.
- Check Node/npm versions if install fails.
