# Episode-1

In this episode, we will explore the basics of React, starting with the React CDN library. We'll discuss how to use React without any build tools, by simply including the React and ReactDOM libraries directly from a CDN in your HTML file.

### React CDN Library

To use React via a CDN, you can include the following scripts in your HTML file:

```html
<script
  src="https://unpkg.com/react@18/umd/react.development.js"
  crossorigin
></script>
<script
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
  crossorigin
></script>
```

These scripts provide the `React` and `ReactDOM` libraries, allowing you to build React components directly in the browser.

### React.createElement

The `React.createElement` method is a fundamental building block of React. It is used to create React elements, which are the smallest units of React applications. A React element describes what you want to see on the screen.

#### Example:

```javascript
const element = React.createElement(
  "h1",
  { className: "greeting" },
  "Hello, world!"
);
```

In this example, `React.createElement` is used to create an `h1` element with a class name of "greeting" and the text content "Hello, world!".

### ReactDOM

`ReactDOM` is responsible for rendering React elements into the DOM. The `ReactDOM.render()` method takes a React element and a DOM container as arguments and updates the DOM to match the given React element.

#### Example:

```javascript
const element = React.createElement("h1", null, "Hello, world!");
const root = document.getElementById("root");
ReactDOM.render(element, root);
```

In this example, we create an `h1` element using `React.createElement` and render it into a DOM element with the id `root` using `ReactDOM.render()`.

### The Need for JSX

While `React.createElement` works well, it can become verbose for complex UIs. JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code directly within your JavaScript. This makes your code more readable and easier to write.

#### JSX Example:

```javascript
const element = <h1 className="greeting">Hello, world!</h1>;
```

Under the hood, JSX is transformed into `React.createElement` calls, so this JSX code is equivalent to the earlier example. However, JSX makes it much easier to visualize the structure of your components.

# Episode-2 - Igniting our APP

## Part 1

### 1. Setting Up with `npm init`

To kickstart our React application, we begin by setting up our project using `npm init`. This command initializes a new Node.js project by creating a `package.json` file, which serves as the heart of your project. The `package.json` file contains metadata about your project, including its name, version, dependencies, and scripts.

### 2. The Need for a Bundler

To build modern JavaScript applications, we need a bundler to combine our code and assets into a single file that can be served to the browser. We'll use **Parcel** as our bundler because it's fast, simple, and comes with zero configuration.

### 3. `npm install` vs `npm install -D`

- `npm install` (or `npm i`): This command installs dependencies that are required for your application to run. These dependencies are added to the `dependencies` section of `package.json`.
- `npm install -D` (or `npm i -D`): This installs development dependencies, which are only needed during development and testing, not in production. These are added to the `devDependencies` section of `package.json`.

### 4. Understanding Carat (`^`) and Tilde (`~`) in `package.json`

- **Carat (`^`)**: Indicates that the version specified can be updated to any newer version that does not increment the left-most non-zero digit. For example, `"^1.2.3"` allows updates to any version from `1.2.3` to `1.9.9` but not `2.0.0`.
- **Tilde (`~`)**: Allows updates to the most recent patch version. For example, `"~1.2.3"` allows updates to versions `1.2.x`, but not `1.3.0`.

### 5. The `package-lock.json` File

The `package-lock.json` file ensures that the same dependencies are installed every time you run `npm install`. It locks down the versions of all dependencies (and their dependencies), including transitive dependencies, to maintain consistency. This file also contains an `integrity` field, which ensures the integrity and security of the installed packages by storing cryptographic hashes of package contents.

### 6. The `node_modules` Directory

The `node_modules` directory contains all the packages that your project depends on. It also includes transitive dependencies, which are the dependencies of your dependencies. This directory can grow large, but it ensures that all necessary modules are available for your project to function correctly.

### 7. Creating a `.gitignore` File

We create a `.gitignore` file to ignore `node_modules` and other files that are regenerated during the build process. This keeps our repository clean and reduces unnecessary clutter in version control.

## Part 2

### 1. Starting a Local Server with Parcel

We can start a local development server using Parcel with the command:

```bash
npx parcel index.html
```

This command bundles our code and serves it on a local server.

### 2. Understanding `npx`

`npx` is a command runner that allows you to execute binaries from the npm registry without installing them globally. It’s handy for running one-off commands like starting a Parcel server.

### 3. Why Avoid CDN for React?

While using a CDN is quick, it’s not ideal for production because it can lead to mismatches in React versions, among other issues. Instead, we should install React and ReactDOM as dependencies in our project:

```bash
npm install react react-dom
```

### 4. Using `type="module"` in `app.js`

To avoid errors like `Uncaught SyntaxError: Cannot use import statement outside a module`, we must specify the `type="module"` attribute in our script tag within `index.html`. This tells the browser to treat the JavaScript file as an ES module.

### 5. Features of Parcel

Parcel offers a range of powerful features:

- **Dev Build**: Parcel handles the development build, making it quick and efficient.
- **Local Server**: Parcel provides a local server with live reload.
- **HMR (Hot Module Replacement)**: Parcel updates modules in the browser as you edit them without requiring a full page reload.
- **File Watching Algorithm**: Parcel watches files for changes and automatically rebuilds them.
- **Fast Builds with Caching**: Parcel uses caching to speed up rebuilds.
- **Image Optimization**: Parcel optimizes images during the build process.
- **Bundling and Minification**: Parcel bundles and minifies your files for production.
- **Content Hashing**: Parcel uses content hashing to ensure browser caching is effective.
- **Code Splitting**: Parcel splits your code into smaller bundles that can be loaded on demand.
- **Differential Bundling**: Parcel creates bundles that support older browsers.
- **Diagnostics**: Parcel provides detailed diagnostics to help debug issues.
- **Tree Shaking**: Parcel removes unused code from your final bundle to optimize performance.

### 6. Creating a Production Build

To create a production build, use the following command:

```bash
npx parcel build
```

This command generates optimized files ready for deployment.

### 7. Understanding the `dist` Folder

The `dist` folder is where Parcel outputs the production build of your project. This folder contains the final bundled, minified, and optimized files that you can deploy.

### 8. Configuring Browser Support with `browserslist`

The `browserslist` configuration in `package.json` determines which browsers your application supports. You can specify the browser versions that you want to support, such as:

```json
"browserslist": [
  "last 2 versions",
  "not dead"
]
```

This ensures that Parcel generates code that is compatible with the specified browsers.

# Episode-3 - Laying the Foundation

## Part 1

### 1. Start and Build Scripts in `package.json`

In this part, we create and explain the `start` and `build` scripts in the `package.json` file. These scripts help streamline the development and production processes.

- **Start Script**: The `start` script is used during development to launch a local server and start the project with Parcel. It watches for changes in your files and automatically reloads the browser.

  ```json
  "scripts": {
    "start": "parcel index.html",
  }
  ```

- **Build Script**: The `build` script is used to create an optimized production build. It bundles, minifies, and outputs the files in the `dist` folder, ready for deployment.

  ```json
  "scripts": {
    "build": "parcel build index.html",
  }
  ```

## Part 2

### 1. Understanding JSX

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. JSX makes it easier to visualize the structure of your UI components, and it feels more intuitive compared to writing `React.createElement` directly.

### 2. JSX is Not HTML

Although JSX looks like HTML, it is not HTML. JSX is a syntax that is similar to HTML or XML, but it is written within JavaScript. Under the hood, JSX is converted into JavaScript objects that represent DOM elements.

### 3. Babel and JSX

Babel is a JavaScript compiler that is used to transpile JSX into plain JavaScript. Since browsers do not natively understand JSX, Babel is necessary to convert it into JavaScript that the browser can interpret. Parcel automatically installs Babel when you use JSX, so you don't need to worry about setting it up manually.

### 4. How JSX is Transpiled

When Babel transpiles JSX, it converts the JSX code into `React.createElement` calls. For example, the following JSX:

```jsx
const element = <h1 className="title">Hello, world!</h1>;
```

Is transpiled into:

```javascript
const element = React.createElement(
  "h1",
  { className: "title" },
  "Hello, world!"
);
```

### 5. JSX Attributes are CamelCase

In JSX, attributes are written in camelCase, unlike HTML, where attributes are typically lowercase. For example, the `class` attribute in HTML becomes `className` in JSX.

### 6. Wrapping JSX in Parentheses

If your JSX code spans multiple lines, it's best practice to wrap it in parentheses. This helps prevent any potential issues with automatic semicolon insertion in JavaScript.

```jsx
const element = (
  <div>
    <h1>Hello, world!</h1>
    <p>Welcome to React.</p>
  </div>
);
```

## Part 3

### 1. React Components

React components are the building blocks of a React application. Components can be classified into two main types:

- **Class-based Components**: The older way of defining components, using ES6 classes.
- **Functional Components**: The modern way of defining components, using plain JavaScript functions.

### 2. Class-based vs. Functional Components

- **Class-based Components**: This is the traditional way of creating components, using the `class` keyword and extending `React.Component`. They are more complex and require handling `this` and lifecycle methods.

- **Functional Components**: The newer, preferred way of creating components using functions. Functional components are simpler, and with the introduction of React Hooks, they can now manage state and side effects, making class-based components largely unnecessary.

### 3. Component Composition

Component composition refers to the practice of building complex UIs by combining simpler components. React allows you to compose components together, passing data from parent to child components through props.

#### Example:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}
```

In this example, the `App` component is composed of two `Welcome` components, each receiving different props.

### 4. JSX and Cross-Site Scripting (XSS) Protection

React automatically protects against cross-site scripting (XSS) attacks by escaping any values embedded in JSX before rendering them. This ensures that even if a value contains malicious code, it will be rendered as plain text rather than executable code. React's sanitization process makes it safe to insert dynamic content into your components.

Here's a detailed `.md` file based on the provided details for Episode 4 titled "Show Me the Code":

# Episode 4 - Show Me the Code

### 1. How to Put Inline Style in React

In React, you can apply inline styles directly to elements using a `style` attribute, but unlike HTML, the styles must be provided as an object. Each CSS property is written in camelCase instead of kebab-case, and values are provided as strings or numbers.

#### Example:

```jsx
const divStyle = {
  color: "blue",
  backgroundColor: "lightgray",
  padding: "10px",
  borderRadius: "5px",
};

function StyledComponent() {
  return (
    <div style={divStyle}>
      This is a styled div using inline styles in React!
    </div>
  );
}
```

In this example, the `divStyle` object contains CSS properties, and the `style` attribute is used to apply these styles to the `div`. Note that camelCase is used for multi-word properties like `backgroundColor`.

### 2. Props in React

Props (short for "properties") are a way to pass data from parent components to child components in React. They are similar to function arguments and can be used to customize a component's appearance or behavior. Props are immutable, meaning they cannot be modified by the receiving component.

#### Example:

```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

In this example, the `Greeting` component receives a `name` prop and uses it to display a personalized greeting. The `App` component passes the `name` prop with the value "Alice" to `Greeting`.

### 3. Props Destructuring

Props destructuring is a convenient way to extract specific properties from the `props` object, making the code cleaner and more readable. Instead of accessing each prop through `props.propName`, you can directly destructure the needed properties in the function signature.

#### Example:

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting name="Bob" />;
}
```

In this example, the `Greeting` component destructures the `name` prop directly in its parameter list. This approach is especially useful when a component has multiple props, reducing the need to repeatedly reference `props`.

### 4. The Use of Key in Component Lists

When rendering a list of components in React, each component should have a unique `key` prop. The `key` helps React identify which items have changed, been added, or removed, optimizing the rendering process. Keys should be unique among sibling elements.

#### Example:

```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
```

In this example, each `li` element is assigned a unique `key` based on the `item.id`. This helps React efficiently update the list when items change.

### 5. Why React Recommends Not Using Index as Key

React advises against using the array index as the `key` when rendering lists because it can lead to issues with component identity. If the list order changes, or if items are added or removed, using the index can cause unexpected behavior, such as losing component state.

#### Example of a Potential Issue:

```jsx
function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}
```

In this example, if items are reordered or new items are inserted, React might incorrectly associate the wrong `li` elements with the wrong items because the `key` is based on the index, which can change. This can lead to subtle bugs, especially when components rely on their internal state. Using a stable, unique identifier like `item.id` is preferred.

---

This concludes Episode 4, Part 1, where we've covered essential React concepts, including inline styles, props, props destructuring, and the importance of keys in component lists. Understanding these fundamentals will help you build more efficient and maintainable React applications.

# Episode 5 - Let's Hooked Up

## 1. File Structure in a React App

A typical React application follows a well-organized file structure that promotes modularity and scalability. While there is no single "correct" way to structure a React app, a common approach includes the following:

- **`src/`**: The main source folder containing all the application code.
  - **`components/`**: A directory for reusable UI components.
  - **`pages/`**: Contains the main page components, often associated with routes.
  - **`assets/`**: Stores static assets like images, fonts, and styles.
  - **`hooks/`**: Custom React hooks are usually placed here.
  - **`context/`**: Houses React context files for global state management.
  - **`utils/`**: Utility functions and helpers are stored here.
  - **`App.js`**: The root component of the application.
  - **`index.js`**: The entry point where the React app is rendered into the DOM.

This structure helps maintain a clean and manageable codebase, making it easier to navigate and scale as the application grows.

## 2. Export and Import in React

React components, functions, and variables can be shared across different files using the `export` and `import` statements. There are two main types of exports: **default export** and **named export**.

- **Default Export**: Each file can have one default export. When importing, you can give it any name.

  #### Example:

  ```javascript
  // MyComponent.js
  export default function MyComponent() {
    return <div>Hello, World!</div>;
  }

  // AnotherFile.js
  import MyComponent from "./MyComponent";
  ```

- **Named Export**: You can have multiple named exports in a file. When importing, you must use the exact name inside curly braces.

  #### Example:

  ```javascript
  // utils.js
  export function add(a, b) {
    return a + b;
  }

  export function subtract(a, b) {
    return a - b;
  }

  // AnotherFile.js
  import { add, subtract } from "./utils";
  ```

Using `export default` is handy when a module primarily exports a single function or class, while named exports are useful for exporting multiple utilities from the same module.

## 3. React Hooks

React Hooks are special functions that allow you to "hook into" React features such as state and lifecycle methods in functional components. Introduced in React 16.8, hooks enable developers to use state and other React features without writing a class component.

#### Common React Hooks:

- **`useState`**: For managing state within functional components.
- **`useEffect`**: For performing side effects, such as data fetching or updating the DOM.
- **`useContext`**: For accessing context values in functional components.
- **`useReducer`**: An alternative to `useState` for managing more complex state logic.

React Hooks promote cleaner and more concise code, making it easier to share logic between components.

## 4. `useState` Hook

The `useState` hook is used to add state to functional components. It returns an array with two elements: the current state value and a function to update that state.

#### Example:

```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

In this example, `useState(0)` initializes a state variable `count` with a value of `0`. The `setCount` function is used to update the state when the button is clicked.

## 5. Reconciliation Algorithm in React (React Fiber)

React Fiber is the reconciliation algorithm used by React to update the DOM efficiently. It breaks the rendering work into units of work, allowing React to pause and resume rendering as needed. This makes React's rendering process more flexible and enables smoother updates, especially for complex applications.

Fiber improves React's ability to manage priority updates, enabling tasks like animations and user interactions to be handled smoothly without blocking other updates. It also allows React to abort or adjust updates when necessary, optimizing the overall performance of the application.

## 6. Virtual DOM

The Virtual DOM is a lightweight copy of the actual DOM. React uses the Virtual DOM to optimize UI rendering by updating only the parts of the DOM that have changed. Instead of directly manipulating the DOM, React first makes changes to the Virtual DOM and then efficiently updates the actual DOM based on these changes.

This process of using a Virtual DOM minimizes expensive DOM operations, leading to better performance, especially in large applications with frequent updates.

## 7. Diffing Algorithm

The diffing algorithm is a core part of React's reconciliation process. When the state of a component changes, React creates a new Virtual DOM tree. The diffing algorithm then compares this new tree with the previous one to identify what has changed.

React's diffing algorithm works under the assumption that components with the same key are of the same type. It only updates the parts of the DOM that differ between the two trees. This efficient comparison process ensures that React can update the UI quickly and smoothly, even with frequent or complex changes.

# Episode 6

## Part 1

### 1. Monolith and Microservice Architecture

- **Monolith Architecture**:

  - In a monolithic architecture, all components of the application are tightly coupled and run as a single unit. This means that the UI, business logic, and data access layers are all bundled together in one codebase.
  - **Advantages**: Simple to develop, deploy, and test initially; easier to manage when the application is small.
  - **Disadvantages**: As the application grows, it becomes difficult to manage, scale, and maintain. Any change or update requires redeploying the entire application, which can lead to longer downtimes.

- **Microservice Architecture**:
  - Microservice architecture breaks down the application into smaller, loosely coupled services that are independently deployable and scalable. Each service focuses on a specific business function and communicates with other services through APIs.
  - **Advantages**: Improved scalability, flexibility, and maintainability; easier to update and deploy individual services; allows teams to work independently on different services.
  - **Disadvantages**: Increased complexity in managing multiple services; requires a robust infrastructure for communication and monitoring.

### 2. Benefits of Microservice Architecture

- **Scalability**: Microservices can be scaled independently, allowing better resource utilization and cost efficiency.
- **Resilience**: Failure in one service does not necessarily bring down the entire system, enhancing overall system reliability.
- **Technology Flexibility**: Different services can be developed using different technologies or programming languages best suited for the specific service.
- **Faster Time to Market**: Teams can work on and deploy services independently, leading to faster development and deployment cycles.
- **Improved Maintenance and Updates**: Microservices can be updated or replaced without affecting the entire system, making it easier to implement new features and fix issues.

## Part 2

### 1. The `useEffect` Hook in React

- The `useEffect` hook in React allows you to perform side effects in function components. It serves a similar purpose as lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` in class components.
- `useEffect` is called after every render by default, but you can control its behavior using the dependency array.

  #### Example:

  ```javascript
  import React, { useEffect, useState } from "react";

  function ExampleComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
      console.log("Component mounted or updated");
    });

    return <div>Check the console for messages</div>;
  }
  ```

### 2. Dependency Array in `useEffect`

- The dependency array is an optional second argument in `useEffect`. It determines when the effect should re-run.
- If you pass an empty array (`[]`), the effect will only run once, similar to `componentDidMount`. If you include variables in the array, the effect will re-run whenever any of those variables change.

  #### Example:

  ```javascript
  useEffect(() => {
    // Effect code here
  }, [dependency1, dependency2]);
  ```

### 3. Calling APIs in `useEffect`

- You can call APIs inside `useEffect` to fetch data when a component mounts or when certain dependencies change.
- Using `async/await` with `useEffect` requires wrapping the async function call inside the effect.

  #### Example:

  ```javascript
  import React, { useEffect, useState } from "react";

  function DataFetchingComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      };

      fetchData();
    }, []);

    return <div>{data ? JSON.stringify(data) : "Loading..."}</div>;
  }
  ```

### 4. Shimmer UI and Its Benefits Over Loader

- **Shimmer UI** is a placeholder loading screen that mimics the layout of the content being loaded, often using animated gradients. It provides users with a preview of the content’s structure, enhancing the perceived performance and reducing the cognitive load.
- **Benefits Over Traditional Loader**:

  - **Visual Feedback**: Users can see a skeleton of the content layout, reducing the uncertainty of waiting times.
  - **Perceived Performance**: Shimmer effects make the loading process feel faster and smoother, improving the user experience.

### 5. Conditional Rendering in React

- Conditional rendering in React allows you to render different UI elements or components based on certain conditions. It can be achieved using JavaScript’s conditional operators like `if`, `ternary`, and `&&`.

  #### Example:

  ```javascript
  import React from "react";

  function Greeting({ isLoggedIn }) {
    return (
      <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>}
      </div>
    );
  }
  ```

  - In this example, the component renders a different greeting message based on whether the `isLoggedIn` prop is `true` or `false`.

# Episode 7 - Navigating the React Router

In this episode, we’ll dive into the core concepts of `react-router-dom`, focusing on routing techniques, including children routes and dynamic routing.

## Part 1: React Router Basics

### 1. Understanding `react-router-dom`

`react-router-dom` is the library that enables routing in React applications. It allows us to create single-page applications (SPAs) with dynamic routing, meaning we can change the view without reloading the page.

### 2. `createBrowserRouter`

The `createBrowserRouter` function sets up the routing in your React app. It uses the History API to keep your UI in sync with the URL, enabling seamless client-side navigation.

Example:

```javascript
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
```

Here, `createBrowserRouter` defines the routes, including a home route (`/`) and a child route for the "About" page.

### 3. `RouterProvider`

`RouterProvider` is the component that makes your router available in your React application. It ties the routes defined in `createBrowserRouter` with the rest of your app.

Example:

```javascript
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}
```

This setup allows your app to handle routing as specified in the `router` configuration.

### 4. Handling Errors with `errorElement`

The `errorElement` in `createBrowserRouter` helps in handling errors. If a user navigates to a route that doesn't exist, the `errorElement` will render instead of the expected component.

Example:

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);
```

In this example, if the user visits a non-existent route, `ErrorPage` will be displayed.

### 5. `useRouteError` Hook

The `useRouteError` hook provides access to the error object thrown during navigation. It’s useful for displaying custom error messages based on what went wrong.

Example:

```javascript
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  let error = useRouteError();
  return <div>Error: {error.statusText || error.message}</div>;
}
```

This hook allows you to tailor the error message according to the specific issue encountered.

## Part 2: Advanced Routing Concepts

### 6. Children Routes and the `Outlet` Component

Children routes are nested routes that enable more complex UI structures. They allow a route to render its child routes inside a parent route component using the `Outlet` component.

Example:

```javascript
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
]);

function Layout() {
  return (
    <div>
      <h1>My App</h1>
      <Outlet />
    </div>
  );
}
```

In this example, the `Layout` component serves as the parent. It renders the `Outlet` component, which acts as a placeholder for the child routes (`Dashboard` and `Settings`). Depending on the URL, the `Outlet` will render the correct child component.

### 7. Dynamic Routing with `useParams`

Dynamic routing allows routes to handle variable segments in the URL, such as IDs. This is achieved using the `useParams` hook.

Example:

```javascript
const router = createBrowserRouter([
  {
    path: "/users/:userId",
    element: <UserProfile />,
  },
]);

function UserProfile() {
  let { userId } = useParams();
  return <div>User ID: {userId}</div>;
}
```

Here, the route `/users/:userId` can match any URL like `/users/1` or `/users/123`. The `useParams` hook extracts the `userId` parameter from the URL, allowing the `UserProfile` component to display different data based on the user ID.

### 8. The `Link` Component

The `Link` component is used for navigation between routes without causing a page refresh. It’s essential for building a smooth SPA experience.

Example:

```javascript
<Link to="/dashboard">Go to Dashboard</Link>
```

This link navigates to the `/dashboard` route, updating the URL and rendering the appropriate component.

### 9. Client-Side vs. Server-Side Routing

- **Client-Side Routing**: Handles navigation within the browser without refreshing the page. React Router implements this by managing the History API.
- **Server-Side Routing**: Every route change triggers a full page reload, with the server sending a new HTML file for each route.

# Episode 8 - Diving into Class-Based Components in React

In this episode, we'll explore class-based components in React, understand how they work, and learn about key concepts like state, lifecycle methods, and unmounting actions.

## 1. Creating a Class-Based Component

In React, class-based components are created using JavaScript classes that extend `React.Component`. These components have access to lifecycle methods and can manage their own internal state.

Example:

```javascript
import React, { Component } from "react";

class MyComponent extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default MyComponent;
```

Here, `MyComponent` is a class-based component that renders a greeting message based on the `name` prop passed to it.

## 2. Why We Write `super(props)` in Class-Based Components

When creating a constructor in a class-based component, we use `super(props)` to pass the `props` from the parent component to the child component. This is necessary because the child class (your component) is extending `React.Component`, and `super` is the function that calls the constructor of the parent class (`React.Component`).

Example:

```javascript
class MyComponent extends Component {
  constructor(props) {
    super(props); // Necessary to access `this.props`
    this.state = { count: 0 };
  }

  render() {
    return <h1>Count: {this.state.count}</h1>;
  }
}
```

Without `super(props)`, you won’t be able to access `this.props` in the constructor.

## 3. Understanding State in Class-Based Components

State is an object that holds data that may change over the component's lifecycle. In class components, state is managed inside the constructor using `this.state`.

Example:

```javascript
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
```

Here, the `count` is stored in the component's state, and `this.setState` is used to update it when the button is clicked.

## 4. React Lifecycle Methods

Class-based components have special methods called **lifecycle methods** that allow developers to run code at specific points in a component’s life.

Key lifecycle phases:

- **Mounting**: Component is created and inserted into the DOM (`constructor`, `render`, `componentDidMount`).
- **Updating**: Component re-renders due to state or prop changes (`render`, `componentDidUpdate`).
- **Unmounting**: Component is removed from the DOM (`componentWillUnmount`).

## 5. Why `componentDidMount` is Perfect for API Calls

`componentDidMount` is called once, immediately after a component is inserted into the DOM. This makes it the perfect place for API calls since the component is fully ready to interact with external data.

Example:

```javascript
class DataFetcher extends Component {
  state = { data: null };

  componentDidMount() {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return <div>{this.state.data ? this.state.data : "Loading..."}</div>;
  }
}
```

In this example, the API call is made inside `componentDidMount`, and once the data is fetched, it updates the component’s state.

## 6. React Render and Commit Phases in Child Components

In React, if a parent component has multiple child components, the render phase of all child components will be completed before moving to the commit phase. During the **render phase**, React calculates what the UI should look like but doesn’t apply changes to the DOM. In the **commit phase**, React applies the changes to the DOM.

Example:

- **Render Phase**: React prepares the components but doesn’t commit them to the DOM.
- **Commit Phase**: React updates the DOM after rendering all child components.

## 7. Understanding `componentDidUpdate`

`componentDidUpdate` is called after the component’s state or props are updated. It’s commonly used for performing side effects after updates.

Example:

```javascript
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    console.log('Count updated:', this.state.count);
  }
}
```

Here, we check if the count state has changed and perform an action accordingly.

## 8. `componentWillUnmount` and Cleaning Up

`componentWillUnmount` is invoked just before a component is removed from the DOM. It’s used for cleanup tasks such as invalidating timers, canceling network requests, or cleaning up subscriptions.

Example:

```javascript
class Timer extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID); // Cleanup timer when component unmounts
  }

  render() {
    return <h1>Timer Running</h1>;
  }
}
```

This ensures that the interval is cleared when the component is unmounted, preventing memory leaks.

## 9. Unmounting Action in Functional Components

In functional components, we use the `useEffect` hook to manage cleanup tasks. The return function inside `useEffect` acts like `componentWillUnmount` in class-based components.

Example:

```javascript
import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const timerID = setInterval(() => console.log("Timer running"), 1000);

    // Cleanup function
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return <h1>Timer Running</h1>;
}
```
