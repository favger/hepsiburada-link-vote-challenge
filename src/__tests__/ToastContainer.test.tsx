import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import ToastContainer from '../components/layout/ToastContainer';
import { GlobalStateProvider } from '../context/GlobalState';
import useGlobalState from '../hooks/useGlobalState';
import { hideToast, showToast } from '../context/actions/toastActions';

describe('ToastContainer', () => {
	const wrapper = ({ children }: { children: any }) => (
		<GlobalStateProvider>
			<ToastContainer />
			{children}
		</GlobalStateProvider>
	);

	const toastExample = {
		type: 'success',
		message: 'Lorem ipsum sit amet.',
	};

	it('show one piece of toast appropriately', () => {
		const { result } = renderHook(() => useGlobalState(), { wrapper });

		act(() => {
			result.current.dispatch(showToast(toastExample));
		});

		expect(document.body.classList.contains('toast-active')).toBeTruthy();
		expect(result.current.globalState.toast).toEqual(toastExample);
	});

	it('hide toast appropriately', () => {
		const { result } = renderHook(() => useGlobalState(), { wrapper });

		act(() => {
			result.current.dispatch(showToast(toastExample));
		});

		expect(document.body.classList.contains('toast-active')).toBeTruthy();
		expect(result.current.globalState.toast).toEqual(toastExample);

		act(() => {
			result.current.dispatch(hideToast());
		});

		expect(result.current.globalState.toast).toEqual(null);
	});
});
