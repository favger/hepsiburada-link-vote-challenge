import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('AddNewLinkPage Component', () => {
	render(<App />);
	const linkSubmitButtonEl = screen.getByTestId('link-submit-button');
	userEvent.click(linkSubmitButtonEl);

	it('inputs appear when you go to add link page', () => {
		const linkListPageTitle = screen.getByText('Add New Link');
		const linkNameInputLabel = screen.getByText('Link Name:');
		const linkUrlInputLabel = screen.getByText('Link URL:');

		expect(linkListPageTitle).toBeInTheDocument();
		expect(linkNameInputLabel).toBeInTheDocument();
		expect(linkUrlInputLabel).toBeInTheDocument();
	});

	it('inputs appear when you go to add link page', () => {
		render(<App />);

		const linkNameInput = screen.getByPlaceholderText('e.g. Alphabet');
		const linkUrlInput = screen.getByPlaceholderText('e.g. http://abc.xyz');
		const linkButton = screen.getByRole('button', { name: /add/i });

		expect(linkNameInput).toBeInTheDocument();
		expect(linkUrlInput).toBeInTheDocument();
		expect(linkButton).toBeInTheDocument();
	});

	it('when a new link is added it should appear in the list', async () => {
		render(<App />);

		const linkListPageReturnBackButton = screen.getByText('Return To List');

		const linkNameInput = screen.getByPlaceholderText('e.g. Alphabet');
		const linkUrlInput = screen.getByPlaceholderText('e.g. http://abc.xyz');
		const linkButton = screen.getByRole('button', { name: /add/i });

		const newLink = {
			name: 'Faruk Gerçek',
			url: 'https://farukgercek.com',
		};

		userEvent.type(linkNameInput, newLink.name);
		userEvent.type(linkUrlInput, newLink.url);

		await userEvent.click(linkButton);
		await userEvent.click(linkListPageReturnBackButton);

		const addedLinkName = screen.getByText(newLink.name);
		const addedLinkUrl = screen.getByText(newLink.url, { exact: false });

		expect(addedLinkName).toBeInTheDocument();
		expect(addedLinkUrl).toBeInTheDocument();
	});
});
