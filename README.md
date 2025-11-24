<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" alt="Angular" width="38" height="38" align="right" style="margin-right:8px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" width="38" height="38" align="right" style="margin-right:8px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" width="38" height="38" align="right" style="margin-right:8px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" width="38" height="38" align="right" style="margin-right:8px"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwindcss" width="38" height="38" align="right" style="margin-right:8px"/>

# Investment Calculator ✨

**A sleek, modern investment growth calculator built with Angular**  
Calculate compound interest, track yearly results, and visualize your financial future — all in a clean, component-based Angular application.

Part of an Angular mastery course — perfect for learning services, component communication, and TypeScript modeling.

<br/>

## Features

| Feature                        | Description                                              |
|--------------------------------|----------------------------------------------------------|
| Form Input                     | Initial amount, duration, expected return %, compounding |
| Yearly Breakdown               | Detailed year-by-year investment growth table            |
| Results Service                | Stores & manages calculation history                     |
| Responsive & Clean UI          | Beautiful, mobile-friendly design                        |
| Fully Typed (TypeScript)       | Strong typing with interfaces & models                   |

<br/>

## Tech Stack

<div align="center">

| Technology     | Version |
|----------------|---------|
| Angular        | v18+ (see `package.json`) |
| TypeScript     | Latest  |
| HTML5          | Semantic markup |
| CSS3           | Flexbox & modern styling |
| Node.js + npm  | Tooling |

</div>

<br/>

## Project Structure (Key Files)
src/app/
├── app.component.ts
├── header/
│   └── header.component.ts/html/css
├── investment/
│   ├── investment-calculator.component.ts/html/css
│   ├── investmentData.model.ts
│   └── investment-result/
│       ├── investment-result.component.ts/html/css
│       ├── investment-result.model.ts
│       └── investment-results.service.ts
text<br/>

## Quick Start (Windows / macOS / Linux)

```bash
# 1. Clone or download the project
git clone <your-repo-url>
cd investment-calculator

# 2. Install dependencies
npm install

# 3. Launch dev server (opens browser automatically)
ng serve --open
npx ng serve --open
App runs at → http://localhost:4200


Build for Production
Bashng build --configuration production
npx ng build --configuration production
Output → /dist/


Ideas to Level Up

Add Reactive Forms with validation
Add chart visualization (Chart.js or NGX-Charts)
Persist results using localStorage or a mock backend
Add unit tests with Jasmine/Karma or Jest
Style with Tailwind CSS or Angular Material

Made with ❤️ and a lot of TypeScript
https://raw.githubusercontent.com/marwin1991/profile-technology-icons/main/assets/angular.svg

```
