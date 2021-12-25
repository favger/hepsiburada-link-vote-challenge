import React from 'react';
import { render } from '@testing-library/react';
import { LinkFormField } from '../../../components/links';

describe('ListFormField Component', () => {
	it('should be render', () => {
		const { container } = render(
			<LinkFormField
				name="name"
				label="label"
				readOnly={true}
				value="123"
			/>
		);

		const element = container.querySelector('.links__form__field');
		const elementInput = element?.querySelector('input');
		const elementLabel = element?.querySelector(
			'.links__form__field__label'
		);

		expect(element).toBeInTheDocument();
		expect(elementInput).toBeInTheDocument();
		expect(elementInput?.value).toBe('123');

		expect(elementLabel).toBeInTheDocument();
		expect(elementLabel).toHaveTextContent('label');
	});
});
