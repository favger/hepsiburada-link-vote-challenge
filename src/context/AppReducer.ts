import { GlobalStateInterface, ActionType } from '../types/globalStateTypes';
import { LinkType } from '../types/linkTypes';

export default (state: GlobalStateInterface, action: ActionType) => {
	switch (action.type) {
		// MODAL (Actions)
		case 'SHOW_MODAL':
			return {
				...state,
				modal: action.payload,
			};
		case 'HIDE_MODAL':
			return {
				...state,
				modal: null,
			};
		// TOAST (Actions)
		case 'SHOW_TOAST':
			return {
				...state,
				toast: action.payload,
			};
		case 'HIDE_TOAST':
			return {
				...state,
				toast: null,
			};
		// LINKS (Actions)
		case 'SET_ORDER_BY':
			return {
				...state,
				orderBy: action.payload,
			};
		case 'LINK_ADD':
			return {
				...state,
				links: [action.payload, ...state.links],
			};
		case 'LINK_EDIT':
			return {
				...state,
				links: state.links.map((link) =>
					link.id === action.payload.id ? action.payload : link
				),
			};
		case 'LINK_DELETE':
			return {
				...state,
				links: state.links.filter((link) => {
					return link.id !== action.payload;
				}),
			};
		case 'LINK_VOTE_INCREASE':
			return {
				...state,
				links: state.links.map((link: LinkType) =>
					link.id === action.payload
						? { ...link, points: link.points + 1 }
						: link
				),
			};
		case 'LINK_VOTE_DECREASE':
			return {
				...state,
				links: state.links.map((link) =>
					link.id === action.payload
						? { ...link, points: link.points - 1 }
						: link
				),
			};
		default:
			return state;
	}
};
