````markdown
# Episode 1

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
````

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

# episode-2 - Igniting our APP

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
