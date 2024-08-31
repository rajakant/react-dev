import React from 'react';
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1',{},'Namaste React Dev');
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(heading);