import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { render } from '@testing-library/react';
import { LinkList } from '../../../components/links';
import { LinkType } from '../../../types/linkTypes';

describe('LinkList Component', () => {
	const link1: LinkType = {
		id: uuidv4(),
		name: 'HepsiExpress',
		url: 'https://hepsiburada.com/hepsiexpress',
		points: 5,
	};

	const link2: LinkType = {
		id: uuidv4(),
		name: 'HepsiGlobal',
		url: 'https://hepsiburada.com/hepsiglobal',
		points: 0,
	};

	it('render works properly', () => {
		const { container } = render(<LinkList data={[link1, link2]} />);
		expect(container.querySelector('.links__list')).toBeInTheDocument();
		expect(container.querySelectorAll('.links__list__item')).toHaveLength(
			2
		);

		const link1El = container.querySelector(
			'.links__list__item:nth-child(1)'
		);

		expect(
			link1El?.querySelector('.links__list__item__points__strong')
		).toHaveTextContent('5');
		expect(
			link1El?.querySelector('.links__list__item__body__title')
		).toHaveTextContent('HepsiExpress');
		expect(
			link1El?.querySelector('.links__list__item__body__link')
		).toHaveTextContent('(https://hepsiburada.com/hepsiexpress)');

		const link2El = container.querySelector(
			'.links__list__item:nth-child(2)'
		);

		expect(
			link2El?.querySelector('.links__list__item__points__strong')
		).toHaveTextContent('0');
		expect(
			link2El?.querySelector('.links__list__item__body__title')
		).toHaveTextContent('HepsiGlobal');
		expect(
			link2El?.querySelector('.links__list__item__body__link')
		).toHaveTextContent('(https://hepsiburada.com/hepsiglobal)');
	});
});
