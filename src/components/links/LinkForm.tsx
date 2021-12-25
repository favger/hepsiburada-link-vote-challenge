import React, { ReactElement, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

function LinkForm({ children, ...props }: Props): ReactElement {
	return (
		<form className="links__form" {...props}>
			{children}
		</form>
	);
}

export default LinkForm;
