import React, { ReactElement } from 'react';

interface Props {
	orderBy?: any;
	handleSelectOrderBy?: (value: string) => void;
}

function LinkFilterArea({ orderBy, handleSelectOrderBy }: Props): ReactElement {
	// events
	const onChange = (e: React.FormEvent<HTMLSelectElement>): void => {
		const target = e.target as HTMLTextAreaElement;
		handleSelectOrderBy && handleSelectOrderBy(target.value);
	};

	return (
		<div className="links__filter-area">
			{/*begin::Select*/}
			<div className="links__filter-area__select">
				<select
					className="links__filter-area__select__input"
					defaultValue={orderBy || undefined}
					onChange={onChange}>
					<option value="">Order by</option>
					<option value="desc">Most Voted (Z {'>'} A)</option>
					<option value="asc">Less Voted (A {'>'} Z)</option>
				</select>
				<div className="links__filter-area__select__arrow" />
			</div>
			{/*end::Select*/}
		</div>
	);
}

export default LinkFilterArea;
