import React from 'react';
import { render } from '@testing-library/react';
import { Pagination } from '../../../components';

describe('Pagination Component', () => {
	const paginationProps = {
		value: 1,
		range: 25,
		onChange: () => null,
		className: 'pagipagi',
	};

	it('render works properly', () => {
		const { container } = render(<Pagination {...paginationProps} />);
		const paginationEl = container.querySelector('.pagipagi');
		const paginationPrevArrowEl = container.querySelector(
			'.pagination__item.pagination__item_icon:first-child'
		);
		const paginationNextArrowEl = container.querySelector(
			'.pagination__item.pagination__item_icon:last-child'
		);
		const paginationItemElements = container.querySelectorAll(
			'.pagination__item:not(.pagination__item_icon)'
		);

		const firstPaginationItem = paginationItemElements[0];

		const lastPaginationItem =
			paginationItemElements[paginationItemElements.length - 1];

		expect(paginationEl).toBeInTheDocument();
		expect(paginationPrevArrowEl).toBeInTheDocument();
		expect(paginationNextArrowEl).toBeInTheDocument();

		expect(firstPaginationItem).toHaveTextContent('1');
		expect(lastPaginationItem).toHaveTextContent(
			`${paginationProps.range}`
		);
	});
});
