import { ToastType } from '../../types/toastTypes';
import * as toastActionTypes from '../actionTypes/toastActionTypes';

// Toast Actions
export const showToast = (toast: ToastType) => ({
	type: toastActionTypes.SHOW_TOAST,
	payload: toast,
});

export const hideToast = () => ({
	type: toastActionTypes.HIDE_TOAST,
	payload: null,
});
