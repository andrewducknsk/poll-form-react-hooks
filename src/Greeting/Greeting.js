import React from 'react';
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
import './greeting.scss';

export function Greeting() {
	return (
		<SectionWrapper
			sectionClass='greeting'
			title='Ответе на пару вопросов'
			titleClass='greeting__title'
			form={false}
			link='/personal-information'
			linkText='Начать'
		/>
	);
}
