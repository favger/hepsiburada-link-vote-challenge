import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('LinksListPage Component', () => {
	it('send a link appears on the screen', async () => {
		render(<App />);
		const linkSubmitButtonEl = screen.getByTestId('link-submit-button');
		expect(linkSubmitButtonEl).toBeInTheDocument();
		userEvent.click(linkSubmitButtonEl);
		expect(window.location.href.endsWith('/links/add')).toBeTruthy();
	});
});
