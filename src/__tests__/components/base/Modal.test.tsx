import React from 'react';
import { render } from '@testing-library/react';
import { Modal } from '../../../components';

beforeAll(() => {
	let portalRoot = document.getElementById('modal-root');
	if (!portalRoot) {
		portalRoot = document.createElement('div');
		portalRoot.setAttribute('id', 'modal-root');
		document.body.appendChild(portalRoot);
	}
});

describe('Modal Component', () => {
	it('render works properly', () => {
		render(
			<Modal>
				<Modal.Header>Modal Title</Modal.Header>
				<Modal.Body alignCenter>Modal Body</Modal.Body>
				<Modal.Footer>Modal Footer</Modal.Footer>
			</Modal>
		);

		expect(document.body.classList.contains('modal-active')).toBeTruthy();
		expect(document.getElementById('modal-root')).toBeInTheDocument();
		expect(document.querySelector('.modal')).toBeInTheDocument();
		expect(
			document.querySelector('.modal .modal__backdrop')
		).toBeInTheDocument();
		expect(
			document.querySelector('.modal .modal__container')
		).toBeInTheDocument();
		expect(
			document.querySelector('.modal .modal__content')
		).toBeInTheDocument();
		expect(
			document.querySelector('.modal .modal__header')
		).toBeInTheDocument();
		expect(
			document.querySelector('.modal .modal__body.modal__body_center')
		).toBeInTheDocument();
		expect(
			document.querySelector('.modal .modal__footer')
		).toBeInTheDocument();
	});
});
