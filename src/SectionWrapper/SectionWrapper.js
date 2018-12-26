import React from 'react';
import {Link} from 'react-router-dom';
import './btn.scss';

export function SectionWrapper(props) {
	return (
		<section className={props.sectionClass}>
			<h2 className={props.titleClass}>{props.title}</h2>
			{props.form ? (
				<form className={props.formClass}>{props.children}</form>
			) : null}
			<Link className='btn' to={props.link} onClick={props.onClickLink}>
				{props.linkText}
			</Link>
		</section>
	);
}
