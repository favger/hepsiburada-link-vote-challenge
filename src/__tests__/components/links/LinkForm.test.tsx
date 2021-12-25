import React from 'react';
import { render } from '@testing-library/react';
import { LinkForm } from '../../../components/links';

describe('ListForm Component', () => {
	it('should be render', () => {
		const { container } = render(
			<LinkForm>
				<input type="text" />
			</LinkForm>
		);

		expect(container.querySelector('.links__form')).toBeInTheDocument();
		expect(container.querySelector('input')).toBeInTheDocument();
	});
});
