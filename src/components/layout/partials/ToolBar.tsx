import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
	historyBack: boolean;
}

function Toolbar({ historyBack = true }: Props): ReactElement {
	const navigate = useNavigate();

	// handlers
	const handleNavigateToListPage = () => {
		navigate('/');
	};

	return (
		<div className="toolbar">
			{historyBack && (
				<button
					className="toolbar__button"
					onClick={handleNavigateToListPage}>
					<i className="fa fa-arrow-left" />
					Return To List
				</button>
			)}
		</div>
	);
}

export default Toolbar;
