import React from 'react';
import { Link } from 'react-router-dom';
import HBLogo from '../../../assets/images/hepsiburada-logo-without-slogan.png';
import { APP } from '../../../constants';
import { Container } from '../../';

function Header() {
	return (
		<header className="header">
			<Container size="xl">
				{/*begin::Logo*/}
				<figure className="header__logo">
					<Link to="/" title={APP.name}>
						<img src={HBLogo} alt={APP.name} />
					</Link>
				</figure>
				{/*end::Logo*/}

				{/*begin::Title*/}
				<article className="header__title__wrapper">
					<h2 className="header__title">
						<span className="header__title_bold">Link</span>
						<span className="header__title_light">VOTE</span>{' '}
						Challange
					</h2>
				</article>
				{/*end::Title*/}
			</Container>
		</header>
	);
}

export default Header;
