import React, { ReactElement, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Separator } from '../components';
import {
	LinkList,
	LinkFilterArea,
	LinkSubmitButton,
	LinkPagination,
	LinkNoRecords,
} from '../components/links';
import { PAGE_SIZE_LIMIT } from '../constants';
import LinkDeleteModal from '../components/modals/LinkDeleteModal';
import useGlobalState from '../hooks/useGlobalState';
import {
	setOrderBy,
	voteDecreaseByLinkId,
	voteIncreaseByLinkId,
} from '../context/actions/linkActions';
import { showModal } from '../context/actions/modalActions';
import { LinkType } from '../types/linkTypes';

function LinksListPage(): ReactElement {
	const { globalState, dispatch } = useGlobalState();
	const navigate = useNavigate();
	const [page, setPage] = useState(1);

	const sortedLinks = useMemo(() => {
		const links = [...globalState.links]; // this is for immutable

		if (links.length <= 0) {
			return links;
		}

		return links.sort((a, b) => {
			if (globalState.orderBy === 'asc') {
				return a.points - b.points;
			}

			if (globalState.orderBy === 'desc') {
				return b.points - a.points;
			}

			return 1;
		});
	}, [globalState.orderBy, globalState.links]);

	const paginatedLinks = sortedLinks.length
		? sortedLinks.slice(
				(page - 1) * PAGE_SIZE_LIMIT, // ACTION(1): (0 * 5 = 0), ACTION(2): (1 * 5 = 5); >>> 5 between
				page * PAGE_SIZE_LIMIT // ACTION(2): (1 * 5 = 5), ACTION(2): (2 * 5 = 10); >>> 10
		  )
		: [];

	// efects
	useEffect(() => {
		if (page === 1) return;
		setPage(1);
	}, [globalState.orderBy]);

	// events
	const handleNavigateToAddPage = () => {
		navigate('links/add');
	};

	const handleSelectOrderBy = (value: string) => {
		dispatch(setOrderBy(value));
	};

	const handleVoteUp = (id: string) => {
		dispatch(voteIncreaseByLinkId(id));
	};

	const handleVoteDown = (id: string) => {
		dispatch(voteDecreaseByLinkId(id));
	};

	const handleEdit = (data: LinkType) => {
		if (!data.id) return;
		navigate(`/links/edit/${data.id}`);
	};

	const handleDelete = (data: LinkType) => {
		dispatch(
			showModal({
				name: 'link-delete',
				data,
			})
		);
	};

	return (
		<Container size="sm" className="links">
			{/*begin::LinkSubmitButton*/}
			<LinkSubmitButton />
			{/*end::LinkSubmitButton*/}

			{/*begin::Separator*/}
			<Separator />
			{/*end::Separator*/}

			{/*begin::LinkFilterArea*/}
			<LinkFilterArea
				orderBy={globalState.orderBy}
				handleSelectOrderBy={handleSelectOrderBy}
			/>
			{/*end::LinkFilterArea*/}

			{/*begin::LinkList*/}
			{paginatedLinks.length ? (
				<LinkList
					data={paginatedLinks}
					handleVoteUp={handleVoteUp}
					handleVoteDown={handleVoteDown}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			) : (
				<LinkNoRecords handleClick={handleNavigateToAddPage} />
			)}
			{/*end::LinkList*/}

			{/*begin::LinkPagination*/}
			<LinkPagination data={sortedLinks} page={page} setPage={setPage} />
			{/*end::LinkPagination*/}

			{/*begin::LinkDeleteModal*/}
			{globalState.modal?.name === 'link-delete' && <LinkDeleteModal />}
			{/*end::LinkDeleteModal*/}
		</Container>
	);
}

export default LinksListPage;
