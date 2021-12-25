import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import { Portal } from '..';
import useGlobalState from '../../hooks/useGlobalState';
import { hideToast } from '../../context/actions/toastActions';

function ToastContainer(): any {
	const { globalState, dispatch } = useGlobalState();
	const timeoutRef = useRef<any>();
	const toastElRef = useRef<any>();
	const { toast } = globalState;

	// effects
	useEffect(() => {
		if (!toast || !toastElRef.current) return;

		// add "toast_start-animation" class to element
		toastElRef.current.classList.add('toast_start-animation');

		// after 3000 seconds remove class and close toast
		timeoutRef.current = setTimeout(() => {
			toastElRef.current.classList.remove('toast_start-animation');
			timeoutRef.current = setTimeout(handleCloseToast, 400); // 400 ms (for: tranisition-duraction: .4s)
		}, toast.delay || 3000);

		return () => clearTimeout(timeoutRef.current);
	}, [toast]);

	// events
	const handleCloseToast = () => {
		dispatch(hideToast());
	};

	return (
		<Portal
			rootEl={document.getElementById('toast-root')}
			activeClass="toast-active">
			{toast && (
				<div
					ref={toastElRef}
					className={clsx('toast', {
						toast_success: toast.type === 'success',
						toast_danger: toast.type === 'danger',
					})}
					onClick={handleCloseToast}>
					<span>{toast.message || toast.messageBody}</span>
				</div>
			)}
		</Portal>
	);
}

export default ToastContainer;
