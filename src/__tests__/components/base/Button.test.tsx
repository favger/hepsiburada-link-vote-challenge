import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../../../components';
import userEvent from '@testing-library/user-event';

describe('Button Component', () => {
	it('render works properly', () => {
		render(<Button className="test">Test</Button>);
		const buttonEl = screen.getByRole('button', { name: 'Test' });
		expect(buttonEl).toBeInTheDocument();
		expect(buttonEl.classList.contains('test')).toBeTruthy();
	});

	it('click event works properly', () => {
		const mockClickHandle = jest.fn((x) => x + 1);
		render(<Button onClick={() => mockClickHandle(1)}>Test</Button>);
		const buttonEl = screen.getByRole('button', { name: 'Test' });
		userEvent.click(buttonEl);
		expect(mockClickHandle.mock.results[0].value).toBe(2);
	});
});
