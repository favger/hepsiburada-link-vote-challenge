import React, { ReactElement, useState } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { Container, Title, Toolbar } from '../components';
import { LinkForm, LinkFormField, LinkFormButton } from '../components/links';
import { editLink } from '../context/actions/linkActions';
import { showToast } from '../context/actions/toastActions';
import useGlobalState from '../hooks/useGlobalState';
import { LinkType } from '../types/linkTypes';
import { isUrlValid } from '../utils';

function EditLinkPage(): ReactElement {
	const { globalState, dispatch } = useGlobalState();
	const params = useParams();
	const navigate = useNavigate();
	const link: any = globalState.links.find((x) => x.id === params.id) || {};
	const [formValues, setFormValues] = useState({
		name: link.name,
		url: link.url,
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

		const updatedLink: LinkType = {
			...link,
			name: formValues.name,
			url: formValues.url,
		};

		// Add link to global state
		dispatch(editLink(updatedLink));

		dispatch(
			showToast({
				type: 'success',
				messageBody: (
					<>
						<b>{updatedLink.name}</b> updated.
					</>
				),
			})
		);

		// redirect to list page
		navigate('/');
	};

	// if the link is not found
	if (!link.id) {
		return <Navigate to="/" />;
	}

	return (
		<Container size="sm" className="links">
			{/*begin::Toolbar*/}
			<Toolbar historyBack />
			{/*end::Toolbar*/}

			{/*begin::Title*/}
			<Title>
				Edit {'"'}
				{link.name}
				{'"'}
			</Title>
			{/*begin::Title*/}

			{/*begin::LinkForm*/}
			<LinkForm onSubmit={handleSubmit}>
				{/*begin::LinkForm.Field*/}
				<LinkFormField
					name="name"
					label="Link Name:"
					placeholder="e.g. Alphabet"
					onChange={handleChange}
					value={formValues.name}
				/>
				{/*end::LinkFormField*/}

				{/*begin::LinkFormField*/}
				<LinkFormField
					name="url"
					label="Link URL:"
					placeholder="e.g. http://abc.xyz"
					onChange={handleChange}
					value={formValues.url}
				/>
				{/*end::LinkFormField*/}

				{/*begin::LinkFormButton*/}
				<LinkFormButton type="submit">
					<i className="fa fa-pencil-alt" />
					EDIT
				</LinkFormButton>
				{/*end::LinkFormButton*/}
			</LinkForm>
			{/*end::LinkForm*/}
		</Container>
	);
}

export default EditLinkPage;
