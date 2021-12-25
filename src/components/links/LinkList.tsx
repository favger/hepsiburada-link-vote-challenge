import React, { ReactElement } from 'react';
import LinkItem from './LinkItem';
import { LinkType } from '../../types/linkTypes';

interface Props {
	data: LinkType[];
	handleVoteUp?: (linkId: string) => void;
	handleVoteDown?: (linkId: string) => void;
	handleEdit?: (link: LinkType) => void;
	handleDelete?: (link: LinkType) => void;
}

function LinkList({ data, ...props }: Props): ReactElement {
	return (
		<div className="links__list">
			{data.map((link) => (
				<LinkItem key={link.id} data={link} {...props} />
			))}
		</div>
	);
}

export default LinkList;
