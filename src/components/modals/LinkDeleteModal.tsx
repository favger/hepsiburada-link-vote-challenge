import React, { ReactElement } from 'react';
import { Button, Modal } from '..';
import { deleteLink } from '../../context/actions/linkActions';
import { hideModal } from '../../context/actions/modalActions';
import { showToast } from '../../context/actions/toastActions';
import useGlobalState from '../../hooks/useGlobalState';

function LinkDeleteModal({}): ReactElement {
	const { globalState, dispatch } = useGlobalState();
	const selectedLink = globalState.modal.data;

	// events
	const handleSubmit = () => {
		dispatch(deleteLink(selectedLink.id));
		dispatch(
			showToast({
				type: 'success',
				messageBody: (
					<>
						<b>{selectedLink.name}</b> removed.
					</>
				),
			})
		);
		dispatch(hideModal());
	};

	const handleCancel = () => {
		dispatch(hideModal());
	};

	return (
		<Modal onClose={handleCancel}>
			<Modal.Header onClose={handleCancel}>Remove Link</Modal.Header>
			<Modal.Body alignCenter>
				Do you want to remove:
				<strong>{selectedLink.name}</strong>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={handleSubmit}>
					<i className="fa fa-check" />
					OK
				</Button>
				<Button onClick={handleCancel}>Cancel</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default LinkDeleteModal;
