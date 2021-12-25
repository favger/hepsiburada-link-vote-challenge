import React, { ReactElement } from 'react';

interface Props {
	handleClick?: () => void;
}

function LinkNoRecords({ handleClick }: Props): ReactElement {
	return (
		<div className="links__description">
			No link records found.{' '}
			{handleClick && (
				<>
					Click to{' '}
					<button onClick={handleClick}>
						<b>add</b>
					</button>{' '}
					now.
				</>
			)}
		</div>
	);
}

export default LinkNoRecords;
