import { LinkType } from '../../types/linkTypes';
import * as linkActionTypes from '../actionTypes/linkActionTypes';

// Link Actions
export const setOrderBy = (name: any) => ({
	type: linkActionTypes.SET_ORDER_BY,
	payload: name,
});

export const addLink = (link: LinkType) => ({
	type: linkActionTypes.LINK_ADD,
	payload: link,
});

export const editLink = (link: LinkType) => ({
	type: linkActionTypes.LINK_EDIT,
	payload: link,
});

export const deleteLink = (linkId: string) => ({
	type: linkActionTypes.LINK_DELETE,
	payload: linkId,
});

export const voteIncreaseByLinkId = (linkId: string) => ({
	type: linkActionTypes.LINK_VOTE_INCREASE,
	payload: linkId,
});

export const voteDecreaseByLinkId = (linkId: string) => ({
	type: linkActionTypes.LINK_VOTE_DECREASE,
	payload: linkId,
});
