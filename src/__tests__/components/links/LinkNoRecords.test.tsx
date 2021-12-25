import React from 'react';
import { render, screen } from '@testing-library/react';
import { LinkNoRecords } from '../../../components/links';

describe('LinkNoRecords Component', () => {
	it('should be render', () => {
		const { container } = render(<LinkNoRecords />);

		expect(
			container.querySelector('.links__description')
		).toBeInTheDocument();
	});

	it('should be render with handle click', () => {
		render(<LinkNoRecords handleClick={() => null} />);

		expect(screen.getByText(/Click to/i)).toBeInTheDocument();
	});
});
