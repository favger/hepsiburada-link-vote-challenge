import React, { ReactElement, useEffect, useMemo } from 'react';
import { Pagination } from '../';
import { PAGE_SIZE_LIMIT } from '../../constants';

interface Props {
	data: any;
	page: number;
	scrollTo?: boolean;
	setPage: (value: number) => void;
}

function LinkPagination({
	data,
	page,
	setPage,
	scrollTo = true,
}: Props): ReactElement | null {
	const paginationRange = useMemo(
		() => Math.ceil(data.length / PAGE_SIZE_LIMIT),
		[data.length]
	);

	// effects
	useEffect(() => {
		// @NOTE: Check if active page is inside the page range
		if (page > paginationRange) {
			setPage(page - 1);
		}
	}, [page, paginationRange]);

	// events
	const handlePageChange = (page: any) => {
		setPage(page);

		if (scrollTo && window) {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		}
	};

	if (paginationRange <= 1) {
		return null;
	}

	return (
		<Pagination
			value={page}
			range={paginationRange}
			className="links__pagination"
			onChange={handlePageChange}
		/>
	);
}

export default LinkPagination;
