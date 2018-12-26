import React from 'react';
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
import './thanks.scss';

export function Thanks() {
	const handleOnClick = () => {};

	return (
		<SectionWrapper
			sectionClass='thanks'
			title='Благодарим за ответы!'
			titleClass='thanks__title'
			link='/'
			linkText='Пожалуйста'
		/>
	);
}
