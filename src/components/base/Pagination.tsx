import clsx from 'clsx';
import React, { ReactElement } from 'react';

interface PaginationProps {
	value: number;
	range: number;
	onChange: (value: number) => void;
	className?: string;
}

interface PaginationPatternProps {
	range: number;
	value: number;
}

export function makePaginationPattern({
	range,
	value,
}: PaginationPatternProps) {
	if (range < 7) {
		return [...new Array(range)].map((_, i) => i + 1);
	}

	if (value < 4) {
		return [1, 2, 3, 4, 5, '...', range];
	}

	if (value > range - 4) {
		return [1, '...', range - 4, range - 3, range - 2, range - 1, range];
	}

	return [1, '...', value - 1, value, value + 1, '...', range];
}

function Pagination({
	value,
	range,
	onChange,
	className,
}: PaginationProps): ReactElement {
	const pattern = makePaginationPattern({ range, value });

	// events
	const changePage = (value: number) => {
		if (value < 0 || value > range) return;
		onChange(value);
	};

	// renders
	const renderButton = ({
		label,
		icon,
		...props
	}: {
		key?: any;
		title?: string;
		label: any;
		icon?: any;
	}) => {
		const withIcon = !!icon;
		return (
			<button
				className={clsx('pagination__item', {
					pagination__item_icon: withIcon,
					pagination__item_active: value === label,
				})}
				disabled={
					typeof label === 'string' ||
					(withIcon && (label < 1 || label > range))
				}
				onClick={() => changePage(label)}
				{...props}>
				{icon ? icon : label}
			</button>
		);
	};

	return (
		<div className={clsx('pagination', className)}>
			{/*begin::Prev Button */}
			{renderButton({
				label: value - 1,
				title: 'Prev',
				icon: <i className="fa fa-chevron-left" />,
			})}
			{/*begin::Prev Button */}
			{pattern.map((label: any, index) =>
				renderButton({ key: index, label: label })
			)}
			{/*begin::Prev Button */}
			{renderButton({
				label: value + 1,
				title: 'Next',
				icon: <i className="fa fa-chevron-right" />,
			})}
			{/*begin::Prev Button */}
		</div>
	);
}

export default Pagination;
