# Sweet & Sprinkle – Pick 'n' Mix Box Builder

Sweet & Sprinkle is a responsive, interactive online pick 'n' mix sweet shop built for customers to freely choose and create custom treats. Users can browse nine classic sweet varieties, customise their mix in 50g steps up to 2kg, choose their packaging, and view a live price calculation and itemised order receipt.

## Table of Contents

* [Project Goals & User Stories](#project-goals--user-stories)
* [Features](#features)
* [Design Choices](#design-choices)
* [Technologies Used](#technologies-used)
* [Testing & Bugs Fixed](#testing--bugs-fixed)
* [Deployment](#deployment)
* [Credits & Acknowledgements](#credits--acknowledgements)

## Project Goals & User Stories

### Customer Goals
* **As a customer**, I want to browse available sweets easily on my phone or laptop.
* **As a customer**, I want to add or remove sweets in 50g scoops and see my total weight and price update live.
* **As a customer**, I want to choose my preferred packaging (jar, window box, or pouch) and see a clear summary of my order before confirming.

### Developer Goals
* **As a developer**, I want to build a clean, responsive two-page application using semantic HTML5, CSS3, and vanilla JavaScript.
* **As a developer**, I want to prevent invalid orders (such as 0g empty boxes or weights over 2kg) with clear on-screen feedback.

## Features

* **Landing Page & Navigation (`index.html`):** Clean hero banner introducing Sweet & Sprinkle with a direct call-to-action button into the mix builder.
* **Interactive Pick 'n' Mix Grid (`build.html`):** Nine sweet varieties arranged in a responsive 3x3 grid with circular icon badges and `+` / `-` buttons for 50g quantity steps.
* **Live Weight & Proportional Price Calculator (`js/script.js`):** Updates individual card weights, total box weight (capped at 2000g), and running cost (`£4.00` for 300g, `£7.00` for 500g, `£13.00` for 1kg, `£26.00` for 2kg, plus 75p per 50g step in between).
* **Packaging Selector & Itemised Order Confirmation:** Validates that at least 50g is selected, reads the chosen radio button packaging option, and generates an itemised order summary on screen.
* **Custom 404 Error Page (`404.html`):** Catches broken links and guides visitors safely back to the homepage.


## MoSCoW Prioritization

* **Must-Have (Core MVP):** Responsive 3x3 sweet grid, 50g `+` / `-` weight controls, live price calculator, packaging selector, and empty-cart validation.
* **Should-Have:** Proportional 75p-per-50g step pricing between bundle deals, 2kg maximum box limit, and an itemised order receipt on screen.
* **Could-Have (Future Enhancements):** Dietary filter badges (Vegan / Halal / Gluten-Free) , custom gift note input, and local storage to save a customer's box on page refresh.


## Design Choices

* **Colour Scheme:**
  * `#ff006f` (Vivid raspberry Pink) – Used for the brand logo, primary call-to-action buttons, and sidebar accent border.
  * `#5141ff` (Electric Violet blue) – Used for navigation hover states, eyebrow subheadings, and confirmation text.
  * `#1a252f` (Dark Charcoal) – Used for body copy to maintain high contrast and readability against the `#fbfbfe` off-white background creating the flexibility for all.
* **Responsive Layout:** Built with CSS Grid (`grid-template-columns: 2fr 1fr`) on desktop, automatically stacking into a single column below `768px` for mobile screens.

## Technologies Used

* **HTML5:** Semantic structure (`header`, `nav`, `main`, `section`, `footer`) and custom `data-sweet` attributes.
* **CSS3:** Custom `:root` colour variables, CSS Grid, Flexbox, and responsive media queries.
* **JavaScript (ES6):** DOM manipulation (`querySelectorAll`, `getElementById`), event listeners, loops, and conditional pricing logic.
* **VS Code, Git & GitHub:** Code editing, version control, and GitHub Pages hosting.

## Testing & Bugs Fixed

### Manual & Responsive Testing
* Tested all `+` and `-` quantity buttons across all nine sweet cards to confirm accurate 50g increments and zero-gram floor protection.
* Tested empty-box submission (`0g`), 2kg maximum weight cap (`2000g`), and packaging radio selections in Chrome and Edge DevTools.
* Verified mobile (`375px`), tablet (`768px`), and desktop (`1440px`) layouts using browser device emulation.

### Bugs Fixed During Development
* **HTML Structure & Viewport:** Fixed a `charset` typo, corrected mobile viewport `initial-scale` from `0.1` to `1.0`, fixed the broken navigation link to `build.html`, and moved `<footer>` inside `<body>`.
* **Grid Alignment on 9th Card:** Fixed a misplaced closing `</div>` tag above the Foam Bananas card that caused it to stretch full-width outside the 3x3 grid.
* **Hero Button Spacing:** Separated `.hero p` from `.hero h1` in `css/style.css` to add a `20px` bottom margin above the main call-to-action button.
* **Proportional Pricing Tiers:** Updated the JavaScript pricing logic to add 75p per 50g between bundle weights and capped total box weight at 2000g.

### Functional Testing Table

| Feature Tested | Action Taken | Expected Result | Result |
| :--- | :--- | :--- | :--- |
| `+` / `-` Sweet Buttons | Click `+` and `-` across all 9 sweets | Adjusts weight in 50g steps; stops at 0g and 2000g | Pass |
| Tiered Price Calculator | Test 50g, 300g, 350g, 500g, 1kg, and 2kg | Charges £4, £7, £13, £26 at tiers and +75p per 50g between | Pass |
| Empty Box Validation | Click **Confirm Mix** at 0g | Displays red warning asking user to add 50g first | Pass |
| Itemised Order Receipt | Select sweets + packaging and click **Confirm Mix** | Displays itemised sweet list, packaging, and total cost | Pass |
| Mobile Responsiveness | Resize viewport below 768px in DevTools | Stacks sweet grid and order sidebar cleanly into 1 column | Pass |

### Validation & Lighthouse Checks

* **W3C HTML & CSS Validators:** Checked `index.html`, `build.html`, and `css/style.css` for valid syntax and proper tag nesting.
* **JavaScript (JSHint):** Checked `js/script.js` with ES6 enabled; zero critical errors found.
* **Chrome Lighthouse Audit:** Checked Performance, Accessibility, Best Practices, and SEO across desktop and mobile views (high contrast `#1a252f` text and semantic landmarks ensure strong accessibility).


## Deployment

### Deploying to GitHub Pages
1. Open the repository on GitHub (`ashax01/sweet-and-sprinkle`) and click **Settings**.
2. Select **Pages** from the left-hand menu under **Code and Automation**.
3. Under **Branch**, select **`main`** and folder **`/ (root)`**, then click **Save**.
4. Refresh the page after 1–2 minutes to access the live deployed URL (`https://github.io`).

### Running Locally in VS Code
1. Clone or download the repository and open the folder in Visual Studio Code.
2. Right-click `index.html` and select **Open with Live Server** to preview the site locally and see if any bugs.


## Credits & Acknowledgements

* **Code Institute:** Course materials and Project 2 guidelines for HTML5, CSS3, and JavaScript DOM manipulation.
* **W3Schools & MDN Web Docs:** Reference documentation for CSS Grid, Flexbox, media queries, and JavaScript event listeners.
* **Stack Overflow:** Community troubleshooting examples for CSS grid alignment and DOM event handling.
* **AI Study Tools:** Used as a learning aid to clarify JavaScript concepts and help debug layout and pricing logic issues.

 