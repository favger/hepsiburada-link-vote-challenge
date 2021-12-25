import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
	children: ReactNode;
	rootEl: any;
	activeClass: string;
}

function Portal({ rootEl, activeClass, children }: Props) {
	useEffect(() => {
		if (!activeClass) return;
		document.body.classList.add(activeClass);
		return () => document.body.classList.remove(activeClass);
	}, [activeClass]);

	return rootEl ? createPortal(children, rootEl) : null;
}

export default Portal;
