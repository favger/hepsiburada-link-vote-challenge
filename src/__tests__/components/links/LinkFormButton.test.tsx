import React from 'react';
import { render } from '@testing-library/react';
import { LinkFormButton } from '../../../components/links';

describe('ListFormButton Component', () => {
	it('should be render', () => {
		const { container } = render(
			<LinkFormButton type="submit">Button</LinkFormButton>
		);

		expect(
			container.querySelector('.links__form__button')
		).toBeInTheDocument();
		expect(container.querySelector('.links__form__button')?.type).toBe(
			'submit'
		);
	});
});
