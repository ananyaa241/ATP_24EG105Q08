# ATP Week 5

## Our Week 5 Experience
Week 5 felt like a real step into front-end development with React and Tailwind. We moved from basic HTML/CSS into component-based UI, state handling, and clean layout systems. This week was about building real interface pieces, styling them consistently, and seeing how small components combine into a complete page.

## What We Worked On
- `react-app-1/` — A React + Tailwind app where we built a user form and list.
- `react-assignment-1/` — A React product gallery showing how to render arrays of objects into reusable cards.
- `react-assignment-2/` — A React layout with a navbar, user cards, and footer using Tailwind styling.
- `tables/` — Classic HTML table exercises to practice semantic markup and table styling.
- `Tailwind-Project/` — A Tailwind CSS setup for practicing utility-first design.

## Reflecting on the Journey
### React became more familiar
This week we felt the power of React components. In `react-app-1`, we built a `UserForm` and a `UserList` component, then connected them with `useState`. It was satisfying to type a name, email, and date of birth, submit the form, and immediately see the new user card appear.

### Styling with Tailwind felt fast
The React projects used Tailwind to give the UI structure and spacing. We learned how to make cards, buttons, and page layout look consistent with small utility classes. Tailwind helped us focus on the component design rather than writing long CSS files.

### Component reuse made pages cleaner
In `react-assignment-1`, we turned product data into a reusable `Product` component. Mapping over an array of product objects taught us how to render many items with the same structure, keeping our code DRY and easy to extend.

### Layout and polish matter
`react-assignment-2` showed how a simple navbar, users grid, and footer can create a complete page experience. The grid layout for user cards made the content feel organized, while the header and footer gave the page a finished look.

### Classic HTML skills are still important
The `tables/` folder was a good reminder that semantic HTML is the foundation. We practiced using table structure and styling to present tabular data clearly.

## Folder Guide
- `react-app-1/`
  - `src/App.jsx` — main app state and layout
  - `src/components/UserForm.jsx` — controlled inputs and form submission
  - `src/components/UserList.jsx` — renders the list of users
  - `src/components/UserCard.jsx` — user detail card

- `react-assignment-1/`
  - `src/App.jsx` — product array and card grid
  - `src/components/Product.jsx` — product card component

- `react-assignment-2/`
  - `src/App.jsx` — page shell with navbar, users list, and footer
  - `src/components/Navbar.jsx` — top navigation bar
  - `src/components/UsersList.jsx` — maps user data into cards
  - `src/components/Users.jsx` — individual user card
  - `src/components/Footer.jsx` — page footer

- `tables/`
  - `Ass-1.html`, `Ass-2.html`, `Ass-3.html` — HTML table practice
  - `style.css` — table styling rules

- `Tailwind-Project/`
  - `package.json` — Tailwind dependencies
  - `index.css` — Tailwind styles and custom utilities

## How to Run the Projects
1. Open the folder in VS Code.
2. For React projects with Vite (`react-app-1`), run:
   ```bash
   npm install
   npm run dev
   ```
3. For static HTML pages, open the `.html` files in a browser or use Live Server.
4. For the Tailwind project, install dependencies and use the Tailwind CLI if needed.

## Lessons Learned
- React state and props make UI updates predictable.
- Tailwind utilities speed up layout and spacing work.
- Reusable components reduce repetition and simplify maintenance.
- Even with modern tools, HTML fundamentals like tables are essential.

## Next Steps
- Add validation and user feedback to the React forms.
- Make the product gallery interactive with search or filters.
- Convert one of the static pages to a fully responsive layout.
- Keep practicing Tailwind by creating new card and grid designs.
