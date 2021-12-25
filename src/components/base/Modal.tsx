import clsx from 'clsx';
import React, { ReactElement, ReactNode } from 'react';
import { Portal } from '../';

interface ModalProps {
	children: ReactNode;
	onClose?: () => void;
}

interface ModalHeaderProps {
	children: ReactNode;
	onClose?: () => void;
}

interface ModalBodyProps {
	alignCenter?: boolean;
	children: ReactNode;
}

interface ModalFooterProps {
	children: ReactNode;
}

function Modal({ onClose, children, ...props }: ModalProps): ReactElement {
	return (
		<Portal
			rootEl={document.getElementById('modal-root')}
			activeClass="modal-active">
			<div className="modal" {...props}>
				<div className="modal__backdrop" onClick={onClose} />
				<div className="modal__container">
					<div className="modal__content">{children}</div>
				</div>
			</div>
		</Portal>
	);
}

function ModalHeader({ children, onClose, ...props }: ModalHeaderProps) {
	return (
		<div className="modal__header" {...props}>
			<h4 className="modal__header__title">{children}</h4>
			<div className="modal__close" onClick={onClose}>
				<i className="fa fa-times" />
			</div>
		</div>
	);
}

function ModalBody({ children, alignCenter, ...props }: ModalBodyProps) {
	return (
		<div
			className={clsx('modal__body', {
				modal__body_center: alignCenter,
			})}
			{...props}>
			{children}
		</div>
	);
}

function ModalFooter({ children, ...props }: ModalFooterProps) {
	return (
		<div className="modal__footer" {...props}>
			{children}
		</div>
	);
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
