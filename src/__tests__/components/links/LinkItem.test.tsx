import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { render } from '@testing-library/react';
import { LinkItem } from '../../../components/links';
import { LinkType } from '../../../types/linkTypes';
import userEvent from '@testing-library/user-event';

describe('LinkItem Component', () => {
	const link: LinkType = {
		id: uuidv4(),
		name: 'HepsiExpress',
		url: 'https://hepsiburada.com/hepsiexpress',
		points: 100,
	};

	it('render works properly', () => {
		const { container } = render(<LinkItem data={link} />);
		const linkEl = container.querySelector('.links__list__item');

		expect(
			linkEl?.querySelector('.links__list__item__points__strong')
		).toHaveTextContent('100');
		expect(
			linkEl?.querySelector('.links__list__item__body__title')
		).toHaveTextContent('HepsiExpress');
		expect(
			linkEl?.querySelector('.links__list__item__body__link')
		).toHaveTextContent('(https://hepsiburada.com/hepsiexpress)');
	});

	it('should work link "upvote" correctly', () => {
		const newLinkObj = { ...link };
		const handleVoteUp = () => {
			newLinkObj.points = newLinkObj.points + 1;
		};

		const { container } = render(
			<LinkItem data={newLinkObj} handleVoteUp={handleVoteUp} />
		);
		const upVoteButtonEl = container.querySelector(
			'.links__list__item__body__vote__item:nth-child(1)'
		);

		upVoteButtonEl && userEvent.click(upVoteButtonEl);
		expect(newLinkObj.points).toBe(101);
	});

	it('should work link "downvote" correctly', () => {
		const newLinkObj = { ...link };
		const handleVoteDown = () => {
			newLinkObj.points = newLinkObj.points - 1;
		};

		const { container } = render(
			<LinkItem data={newLinkObj} handleVoteDown={handleVoteDown} />
		);
		const downVoteButtonEl = container.querySelector(
			'.links__list__item__body__vote__item:nth-child(2)'
		);

		downVoteButtonEl && userEvent.click(downVoteButtonEl);
		expect(newLinkObj.points).toBe(99);
	});

	it('should work "edit" handle function correctly', () => {
		const newLinkObj = { ...link };

		const handleEdit = (data: LinkType) => {
			expect(data.id).toBe(newLinkObj.id);
		};

		const { container } = render(
			<LinkItem data={newLinkObj} handleEdit={handleEdit} />
		);

		const editButtonEl = container.querySelector(
			'.links__list__item__overlay__button_edit'
		);

		editButtonEl && userEvent.click(editButtonEl);
	});

	it('should work "delete" handle function correctly', () => {
		const newLinkObj = { ...link };

		const handleDelete = (data: LinkType) => {
			expect(data.id).toBe(newLinkObj.id);
		};

		const { container } = render(
			<LinkItem data={newLinkObj} handleDelete={handleDelete} />
		);

		const deleteButtonEl = container.querySelector(
			'.links__list__item__overlay__button_delete'
		);

		deleteButtonEl && userEvent.click(deleteButtonEl);
	});
});
