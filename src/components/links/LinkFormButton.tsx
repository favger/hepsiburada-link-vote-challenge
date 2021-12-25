import React, { ReactElement, ReactNode } from 'react';
import { Button } from '../';

interface Props {
	type?: string;
	children: ReactNode;
}

function LinkFormButton({ children, ...props }: Props): ReactElement {
	return (
		<Button className="links__form__button" {...props}>
			{children}
		</Button>
	);
}

export default LinkFormButton;
