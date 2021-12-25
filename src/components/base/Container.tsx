import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
	children: ReactNode;
	className?: string;
	size?: string;
}

function Container({
	children,
	className,
	size,
	...props
}: Props): ReactElement {
	return (
		<div
			className={clsx(
				className,
				'container',
				size && `container_${size}`
			)}
			{...props}>
			{children}
		</div>
	);
}

export default Container;
