import clsx from 'clsx';
import React, { ReactElement } from 'react';
import { LinkType } from '../../types/linkTypes';

interface Props {
	data: LinkType;
	handleVoteUp?: (linkId: string) => void;
	handleVoteDown?: (linkId: string) => void;
	handleEdit?: (link: LinkType) => void;
	handleDelete?: (link: LinkType) => void;
}

function LinkItem({
	data,
	handleVoteUp,
	handleVoteDown,
	handleEdit,
	handleDelete,
}: Props): ReactElement {
	const { id, name, url, points } = data;

	// events
	const onVoteUp = () => {
		handleVoteUp && handleVoteUp(id);
	};

	const onVoteDown = () => {
		handleVoteDown && handleVoteDown(id);
	};

	const onEditClick = () => {
		handleEdit && handleEdit(data);
	};

	const onDelete = () => {
		handleDelete && handleDelete(data);
	};

	return (
		<div className="links__list__item">
			{/*begin::Points*/}
			<div className="links__list__item__points">
				<span
					className={clsx('links__list__item__points__strong', {
						'links__list__item__points__strong_fs-md': points > 999,
						'links__list__item__points__strong_fs-sm':
							points > 9999,
					})}>
					{points || 0}
				</span>
				POINTS
			</div>
			{/*end::Points*/}

			{/*begin::Body*/}
			<article className="links__list__item__body">
				{/*begin::Title*/}
				<h3 className="links__list__item__body__title">{name}</h3>
				{/*end::Title*/}

				{/*begin::Link*/}
				<a
					href={url}
					title={name}
					target="_blank"
					className="links__list__item__body__link"
					rel="noreferrer">
					({data.url})
				</a>
				{/*end::Link*/}

				{/*begin::Footer*/}
				<div className="links__list__item__body__vote">
					{/*begin::Vote*/}
					<button
						className="links__list__item__body__vote__item"
						title="Up Vote"
						onClick={onVoteUp}>
						<i className="fa fa-arrow-up" />
						Up Vote
					</button>
					{/*end::Vote*/}

					{/*begin::Vote*/}
					<button
						className="links__list__item__body__vote__item"
						title="Down Vote"
						onClick={onVoteDown}>
						<i className="fa fa-arrow-down" />
						Down Vote
					</button>
					{/*end::Vote*/}
				</div>
				{/*end::Footer*/}
			</article>
			{/*end::Body*/}

			{/*begin::Overlay*/}
			<div className="links__list__item__overlay">
				{/*begin::Button*/}
				<button
					className="links__list__item__overlay__button links__list__item__overlay__button_edit"
					title="Edit"
					onClick={onEditClick}>
					<i className="fa fa-pencil-alt" />
				</button>
				{/*end::Button*/}

				{/*begin::Button*/}
				<button
					className="links__list__item__overlay__button links__list__item__overlay__button_trash"
					title="Delete"
					onClick={onDelete}>
					<i className="fa fa-trash" />
				</button>
				{/*end::Button*/}
			</div>
			{/*end::Overlay*/}
		</div>
	);
}

export default LinkItem;
