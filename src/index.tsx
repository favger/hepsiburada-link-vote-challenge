// Polyfill (ie11)
//import "react-app-polyfill/ie11";
//import "react-app-polyfill/stable";

// React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Init Styles (SCSS)
import './index.scss';

// App Component
import App from './App';

// React DOM Render
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('app-root')
);
