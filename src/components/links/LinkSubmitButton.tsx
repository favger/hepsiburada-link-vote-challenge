import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

function LinkSubmitButton(): ReactElement {
	return (
		<Link
			to="links/add"
			className="links__submit-button"
			data-testid="link-submit-button">
			<i className="fa fa-plus" />
			<span>SUBMIT A LINK</span>
		</Link>
	);
}

export default LinkSubmitButton;
