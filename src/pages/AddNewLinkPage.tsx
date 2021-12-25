import React, { ReactElement, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Container, Title, Toolbar } from '../components';
import { LinkForm, LinkFormField, LinkFormButton } from '../components/links';
import { addLink } from '../context/actions/linkActions';
import { showToast } from '../context/actions/toastActions';
import useGlobalState from '../hooks/useGlobalState';
import { LinkType } from '../types/linkTypes';
import { isUrlValid } from '../utils';

function AddNewLinkPage(): ReactElement {
	const { dispatch } = useGlobalState();
	const [formValues, setFormValues] = useState({
		name: '',
		url: '',
	});

	// events
	const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
		const target = e.target as HTMLTextAreaElement;

		// update form state
		setFormValues({
			...formValues,
			[target.name]: target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		const target = e.target as HTMLFormElement;
		e.preventDefault();

		// validation: is empty?
		if (!formValues.name || !formValues.url) {
			dispatch(
				showToast({
					type: 'danger',
					message: 'Please fill in the blanks.',
				})
			);
			return;
		}

		// validation: url detect
		if (!isUrlValid(formValues.url)) {
			dispatch(
				showToast({
					type: 'danger',
					message: 'Please enter the url correctly.',
				})
			);
			return;
		}

		const newLink: LinkType = {
			id: uuidv4(),
			name: formValues.name,
			url: formValues.url,
			points: 0,
		};

		// Add link to global state
		dispatch(addLink(newLink));

		dispatch(
			showToast({
				type: 'success',
				messageBody: (
					<>
						<b>{newLink.name}</b> added.
					</>
				),
			})
		);

		// reset form values
		target.reset();
	};

	return (
		<Container size="sm" className="links">
			{/*begin::Toolbar*/}
			<Toolbar historyBack />
			{/*end::Toolbar*/}

			{/*begin::Title*/}
			<Title>Add New Link</Title>
			{/*begin::Title*/}

			{/*begin::LinkForm*/}
			<LinkForm onSubmit={handleSubmit}>
				{/*begin::LinkForm.Field*/}
				<LinkFormField
					name="name"
					label="Link Name:"
					placeholder="e.g. Alphabet"
					onChange={handleChange}
				/>
				{/*end::LinkFormField*/}

				{/*begin::LinkFormField*/}
				<LinkFormField
					name="url"
					label="Link URL:"
					placeholder="e.g. http://abc.xyz"
					onChange={handleChange}
				/>
				{/*end::LinkFormField*/}

				{/*begin::LinkFormButton*/}
				<LinkFormButton type="submit">
					<i className="fa fa-plus" />
					ADD
				</LinkFormButton>
				{/*end::LinkFormButton*/}
			</LinkForm>
			{/*end::LinkForm*/}
		</Container>
	);
}

export default AddNewLinkPage;
