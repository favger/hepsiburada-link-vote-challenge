import React, { ReactElement, ReactNode } from 'react';

interface Props {
	type?: string;
	name: string;
	label?: string;
	placeholder?: string;
	readOnly?: boolean;
	value?: any;
	onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
	children?: ReactNode;
}

function LinkFormField({ label, children, ...props }: Props): ReactElement {
	return (
		<div className="links__form__field">
			{label && (
				<label className="links__form__field__label">{label}</label>
			)}
			<input {...props} />
			{children}
		</div>
	);
}

export default LinkFormField;
