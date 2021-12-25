import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
	className?: any;
	children: ReactNode;
	onClick?: () => void;
}

function Button({ children, className, ...props }: Props): ReactElement {
	return (
		<button className={clsx('button', className)} {...props}>
			{children}
		</button>
	);
}

export default Button;
