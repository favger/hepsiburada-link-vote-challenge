import React from 'react';
import { render } from '@testing-library/react';
import { LinkFilterArea } from '../../../components/links';

describe('ListFilterArea Component', () => {
	it('should be render with elements(area,select,input,arrow)', () => {
		const { container } = render(<LinkFilterArea />);
		expect(
			container.querySelector('.links__filter-area')
		).toBeInTheDocument();
		expect(
			container.querySelector('.links__filter-area__select')
		).toBeInTheDocument();
		expect(
			container.querySelector('.links__filter-area__select__input')
		).toBeInTheDocument();
		expect(
			container.querySelector('.links__filter-area__select__input')
		).toBeInTheDocument();
	});
});
