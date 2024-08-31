```markdown
# react-dev

## Episode 1

In this episode, we will explore the basics of React, starting with the React CDN library. We'll discuss how to use React without any build tools, by simply including the React and ReactDOM libraries directly from a CDN in your HTML file.

### React CDN Library

To use React via a CDN, you can include the following scripts in your HTML file:

```html
<script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>
```

These scripts provide the `React` and `ReactDOM` libraries, allowing you to build React components directly in the browser.

### React.createElement

The `React.createElement` method is a fundamental building block of React. It is used to create React elements, which are the smallest units of React applications. A React element describes what you want to see on the screen.

#### Example:

```javascript
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);
```

In this example, `React.createElement` is used to create an `h1` element with a class name of "greeting" and the text content "Hello, world!".

### ReactDOM

`ReactDOM` is responsible for rendering React elements into the DOM. The `ReactDOM.render()` method takes a React element and a DOM container as arguments and updates the DOM to match the given React element.

#### Example:

```javascript
const element = React.createElement('h1', null, 'Hello, world!');
const root = document.getElementById('root');
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

```
