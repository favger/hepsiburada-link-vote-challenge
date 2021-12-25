import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Pages
import LinksListPage from '../pages/LinksListPage';
import AddNewLinkPage from '../pages/AddNewLinkPage';
import EditLinkPage from '../pages/EditLinkPage';
import Error404Page from '../pages/Error404Page';

function AllRoutes() {
	return (
		<Routes>
			<Route path="/" element={<LinksListPage />} />
			<Route path="links">
				<Route path="add" element={<AddNewLinkPage />} />
				<Route path="edit/:id" element={<EditLinkPage />} />
				<Route index element={<Navigate to="/" />} />
			</Route>
			<Route path="*" element={<Error404Page />} />
		</Routes>
	);
}

export default AllRoutes;
