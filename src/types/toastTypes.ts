import { ReactNode } from 'react';

export interface ToastType {
	type: string;
	message?: string;
	messageBody?: ReactNode;
	delay?: number;
}
