import React, { ReactElement } from 'react';
import { Container, Toolbar, Title } from '../components';

function Error404Page(): ReactElement {
	return (
		<Container size="sm">
			{/*begin::Toolbar*/}
			<Toolbar historyBack />
			{/*end::Toolbar*/}

			{/*begin::Title*/}
			<Title>Page Not Found (404)</Title>
			{/*begin::Title*/}
		</Container>
	);
}

export default Error404Page;
