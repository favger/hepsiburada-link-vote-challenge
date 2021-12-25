import React from 'react';
import { Header } from '../';

interface LayoutProps {
	children?: React.ReactNode;
	showHeader?: boolean;
}

function Layout({ children, showHeader = true }: LayoutProps) {
	return (
		<>
			{/*begin::Header*/}
			{showHeader && <Header />}
			{/*end::Header*/}

			{/*begin::Main*/}
			<main className="main">{children}</main>
			{/*end::Main*/}
		</>
	);
}

export default Layout;
