import { ModalType } from '../../types/modalTypes';
import * as linkActionTypes from '../actionTypes/modalActionTypes';

// Modal Actions
export const showModal = (modal: ModalType) => ({
	type: linkActionTypes.SHOW_MODAL,
	payload: modal,
});

export const hideModal = () => ({
	type: linkActionTypes.HIDE_MODAL,
	payload: null,
});
