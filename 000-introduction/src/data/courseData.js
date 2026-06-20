export const courseInfo = {
  title: "Welcome to React Course using Udemy",
  author: "Ponniah Kothandaruman",
  overview:
    "This course basically describes React udemy course concepts, noted important points. The course is by Jonas Schmedtmann and covers everything from React fundamentals to building professional full-stack applications with Next.js.",
};

export const topics = [
  {
    id: "pure-react",
    sectionNumber: "01",
    title: "Pure React",
    overview:
      "Introduction to React without any build tools. Uses React loaded from CDN via script tags and React.createElement() directly without JSX.",
    concepts: [
      "React.createElement()",
      "ReactDOM.createRoot()",
      "useState hook",
      "useEffect hook",
      "Rendering without JSX or build tools",
    ],
  },
  {
    id: "js-review",
    sectionNumber: "02",
    title: "JavaScript Review",
    overview:
      "Essential JavaScript review before diving into React. Covers modern ES6+ features that are frequently used in React development.",
    concepts: [
      "Destructuring (objects and arrays)",
      "Template literals",
      "Ternary operator",
      "Arrow functions",
      "Short-circuiting (&&, ||, ??)",
      "Optional chaining",
      "Array.map(), Array.filter(), Array.reduce(), Array.sort()",
      "Immutable arrays (add, delete, update without mutation)",
      "Async/Await and Promises",
      "Fetch API",
    ],
  },
  {
    id: "pizza-menu",
    sectionNumber: "03",
    title: "Pizza Menu",
    projectName: "Fast React Pizza Co.",
    projectDescription:
      "A pizza restaurant menu that displays a list of pizzas with images, ingredients, and prices. Handles sold-out items with conditional styling.",
    overview:
      "First real React project covering the fundamentals of components, props, and JSX.",
    concepts: [
      "Components",
      "Props",
      "JSX syntax and rules",
      "Rendering lists with .map()",
      "Conditional rendering (ternary, &&)",
      "Component composition",
      "CSS in React",
    ],
  },
  {
    id: "steps",
    sectionNumber: "04",
    title: "Steps",
    projectName: "Steps Component",
    projectDescription:
      "A multi-step wizard showing 'Learn React → Apply for jobs → Invest income' with Previous/Next navigation.",
    overview:
      "Introduces state management with useState and event handling in React.",
    concepts: [
      "useState hook",
      "State management basics",
      "Event handlers",
      "Conditional rendering",
      "Children prop",
      "Reusable Button component",
      "Component composition",
    ],
  },
  {
    id: "travel-list",
    sectionNumber: "05",
    title: "Travel List",
    projectName: "Far Away",
    projectDescription:
      "A packing list app for travel — add items, mark as packed, delete, sort by different criteria, clear all, and see packing stats.",
    overview:
      "Deep dive into state management patterns, controlled elements, and lifting state up.",
    concepts: [
      "useState (complex state)",
      "Controlled elements (forms)",
      "Lifting state up",
      "Derived state",
      "Sorting and filtering state",
      "Component decomposition",
    ],
  },
  {
    id: "eat-n-split",
    sectionNumber: "06",
    title: "Eat-N-Split",
    projectName: "Eat-N-Split",
    projectDescription:
      "A bill splitting app — manage friends list, add friends, select a friend, and split a bill calculating who owes whom.",
    overview:
      "Practice project reinforcing state management, controlled forms, and lifting state up.",
    concepts: [
      "useState (multiple states)",
      "Controlled forms",
      "Lifting state up",
      "Conditional rendering",
      "Derived state",
      "Key prop to reset component state",
      "Multiple forms interacting",
    ],
  },
  {
    id: "usepopcorn",
    sectionNumber: "07",
    title: "usePopcorn",
    projectName: "usePopcorn",
    projectDescription:
      "A movie search and watchlist app using the OMDB API. Search movies, view details, rate with stars, and maintain a watched list persisted to localStorage.",
    overview:
      "Covers useEffect for data fetching and side effects, useRef, and building custom hooks.",
    concepts: [
      "useEffect (data fetching, cleanup, event listeners)",
      "useRef hook",
      "Custom hooks (useMovies, useLocalStorageState, useKey)",
      "Component composition",
      "Keyboard event handling",
      "API integration (OMDB API)",
      "Error and loading states",
      "Reusable StarRating component",
    ],
  },
  {
    id: "how-react-works",
    sectionNumber: "08",
    title: "How React Works",
    overview:
      "Understanding React's internals — how rendering, diffing, and reconciliation work behind the scenes.",
    concepts: [
      "Render cycle (render → commit → browser paint)",
      "Diffing algorithm",
      "State batching",
      "Key prop for resetting state",
      "Component vs. element vs. instance",
      "Rules for render logic",
    ],
  },
  {
    id: "classy-weather",
    sectionNumber: "09",
    title: "Classy Weather",
    projectName: "Classy Weather",
    projectDescription:
      "A weather app built with class components. Search for a location and fetch weather data from the Open-Meteo API to display a daily forecast.",
    overview:
      "Introduction to class components and lifecycle methods — understanding the older React paradigm.",
    concepts: [
      "Class components (React.Component)",
      "this.state and this.setState",
      "componentDidMount",
      "componentDidUpdate",
      "render() method",
      "Lifecycle methods vs. hooks comparison",
      "localStorage persistence",
    ],
  },
  {
    id: "react-quiz",
    sectionNumber: "10",
    title: "React Quiz",
    projectName: "The React Quiz",
    projectDescription:
      "A quiz application about React — loads questions from JSON, multi-choice quiz with score tracking, timer, progress bar, high score, and finish screen.",
    overview:
      "Introduces useReducer for complex state management and the Context API for state sharing.",
    concepts: [
      "useReducer hook",
      "Complex state with actions (dataReceived, start, newAnswer, nextQuestion, finish, restart, tick)",
      "Context API (QuizContext)",
      "Component decomposition (Header, Main, Loader, Error, StartScreen, Question, Options, Progress, FinishScreen, Timer)",
      "Timer with useEffect and dispatch",
    ],
  },
  {
    id: "worldwise",
    sectionNumber: "11",
    title: "WorldWise",
    projectName: "WorldWise",
    projectDescription:
      "Track your travels on an interactive world map (Leaflet). Log cities visited with dates and notes, view by city or country, with authentication and protected routes.",
    overview:
      "Covers React Router for multi-page apps, advanced Context API usage, performance optimization, and code splitting.",
    concepts: [
      "React Router (nested routes, Navigate, URL params)",
      "Context API (CitiesContext, FakeAuthContext)",
      "React.lazy() + Suspense for code splitting",
      "CSS Modules",
      "Protected routes",
      "Vite as build tool",
      "useMemo, useCallback, memo",
      "Leaflet map integration",
    ],
  },
  {
    id: "atomic-blog",
    sectionNumber: "12",
    title: "Atomic Blog",
    projectName: "The Atomic Blog",
    projectDescription:
      "A blog app with search functionality and dark mode. Generate random posts, search/filter, add new posts, and toggle dark mode.",
    overview:
      "Deep dive into Context API patterns and performance optimization techniques.",
    concepts: [
      "Context API (creating, providing, consuming)",
      "memo for performance optimization",
      "useMemo hook",
      "useCallback hook",
      "useState + Context for global state",
      "Performance optimization patterns",
    ],
  },
  {
    id: "workout-timer",
    sectionNumber: "13",
    title: "Workout Timer",
    projectName: "Workout Timer",
    projectDescription:
      "A workout/exercise timer calculator — select workout type, configure sets/speed/breaks, and calculate total workout duration with sound effects.",
    overview:
      "Further exploration of performance optimization with useMemo and understanding component re-renders.",
    concepts: [
      "useMemo for derived/computed data",
      "useEffect with cleanup (intervals)",
      "Performance optimization",
      "Component re-render understanding",
      "Complex derived state calculations",
    ],
  },
  {
    id: "redux-intro",
    sectionNumber: "15",
    title: "Redux Introduction",
    projectName: "The React-Redux Bank",
    projectDescription:
      "A banking app — create customer, perform account operations (deposit, withdraw, request/pay loan), balance display, and currency conversion via API.",
    overview:
      "Introduction to Redux for global state management, covering both classic Redux and modern Redux Toolkit.",
    concepts: [
      "Redux fundamentals (store, reducers, actions)",
      "Redux Toolkit (RTK)",
      "useSelector and useDispatch hooks",
      "Action creators",
      "Feature-based folder structure",
      "Thunks for async operations",
      "Classic Redux vs. Redux Toolkit comparison",
    ],
  },
  {
    id: "fast-react-pizza",
    sectionNumber: "16",
    title: "Fast React Pizza",
    projectName: "Fast React Pizza",
    projectDescription:
      "An online pizza ordering app — browse menu, add to cart, create orders with geolocation, order tracking, and priority order upgrades.",
    overview:
      "Modern React development with React Router v6.4 data APIs, Redux Toolkit for cart state, and Tailwind CSS for styling.",
    concepts: [
      "React Router v6.4+ (createBrowserRouter, data loaders, actions)",
      "Redux Toolkit for cart state",
      "Tailwind CSS",
      "Vite build tool",
      "Feature-based project structure",
      "Form actions with React Router",
      "Geolocation API",
    ],
  },
  {
    id: "the-wild-oasis",
    sectionNumber: "17",
    title: "The Wild Oasis",
    projectName: "The Wild Oasis",
    projectDescription:
      "A full hotel management dashboard — manage cabins, bookings, check-ins/check-outs, dashboard with charts, user settings, authentication, and dark mode.",
    overview:
      "The big professional project — building a production-grade React application with modern tools and patterns.",
    concepts: [
      "React Query (@tanstack/react-query)",
      "Styled Components",
      "React Hook Form",
      "Supabase (backend + authentication)",
      "Compound component pattern (Modal, Menus, Table)",
      "Sort, filter, and pagination",
      "Charts (Recharts)",
      "Dark mode (DarkModeContext)",
      "Protected routes and authentication",
      "Toast notifications",
      "Error boundaries",
      "Professional application architecture",
    ],
  },
  {
    id: "manual-ssr",
    sectionNumber: "20",
    title: "Manual Server-Side Rendering",
    overview:
      "Understanding SSR fundamentals by manually rendering React on the server using renderToString() with a raw Node.js HTTP server.",
    concepts: [
      "renderToString() from react-dom/server",
      "Server-side React rendering",
      "Why hydration is needed",
      "Babel for JSX transformation on server",
      "SSR vs. CSR comparison",
    ],
  },
  {
    id: "wild-oasis-website",
    sectionNumber: "21",
    title: "The Wild Oasis Website",
    projectName: "The Wild Oasis Website",
    projectDescription:
      "The customer-facing booking website — browse cabins, filter by capacity, make reservations with a date picker, manage reservations, and user authentication.",
    overview:
      "Building a full-stack application with Next.js App Router, React Server Components, and Server Actions.",
    concepts: [
      "Next.js App Router",
      "React Server Components (RSC)",
      "Server Actions",
      "Middleware",
      "NextAuth / Auth.js",
      "Tailwind CSS",
      "next/font and next/image",
      "Supabase data layer",
      "Route groups and layouts",
      "Loading, error, and not-found pages",
    ],
  },
  {
    id: "nextjs-pages-router",
    sectionNumber: "22",
    title: "Next.js Pages Router",
    overview:
      "Exploring the Next.js Pages Router pattern — the older but still widely-used approach to building Next.js applications.",
    concepts: [
      "Pages Router (pages/ directory)",
      "_app.js custom App component",
      "getStaticProps / getServerSideProps",
      "Dynamic routes (cabins/[id])",
      "API routes (pages/api/)",
      "Pages Router vs. App Router comparison",
    ],
  },
];

export const projects = topics.filter((t) => t.projectName);
