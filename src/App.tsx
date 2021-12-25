import React from 'react';
import { Layout } from './components';

// Glboal State Provider
import { GlobalStateProvider } from './context/GlobalState';

// Router
import { BrowserRouter as Router } from 'react-router-dom';

// Toast Container
import ToastContainer from './components/layout/ToastContainer';

// Routes
import AllRoutes from './router/AllRoutes';

const App = () => {
	return (
		<GlobalStateProvider>
			<Router>
				<Layout>
					<AllRoutes />
				</Layout>
				<ToastContainer />
			</Router>
		</GlobalStateProvider>
	);
};

export default App;
