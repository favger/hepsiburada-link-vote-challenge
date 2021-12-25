import React, { ReactElement, ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

function Title({ children }: Props): ReactElement {
	return <h3 className="title">{children}</h3>;
}

export default Title;
