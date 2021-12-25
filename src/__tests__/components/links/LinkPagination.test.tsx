import React from 'react';
import { render } from '@testing-library/react';
import { LinkPagination } from '../../../components/links';

describe('LinkPagination Component', () => {
	it('render works properly', () => {
		const paginationProps = {
			data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			page: 1,
			setPage: () => null,
		};

		const { container } = render(<LinkPagination {...paginationProps} />);
		const paginationEl = container.querySelector('.links__pagination');
		expect(paginationEl).toBeInTheDocument();
	});

	it('it should not work because the length of the data is not greater than 5', () => {
		const paginationProps = {
			data: [1, 2],
			page: 1,
			setPage: () => null,
		};
		const { container } = render(<LinkPagination {...paginationProps} />);
		const paginationEl = container.querySelector('.links__pagination');
		expect(paginationEl).not.toBeInTheDocument();
	});
});
