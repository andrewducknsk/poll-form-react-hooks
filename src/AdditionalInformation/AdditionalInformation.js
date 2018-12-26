import React, {useState} from 'react';
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
import {FavoriteColor} from '../FavoriteColor/FavoriteColor';
import './additional-information.scss';
import './favorite-color.scss';
import {ValidError} from '../ValidError/ValidError';

export function AdditionalInformation() {
	const [favoriteColor, setFavoriteColor] = useState([]);
	const [isFavoriteColorValid, setIsFavoriteColorValid] = useState(true);
	const [favoriteColorValidError] = useState(`Выберите любимый цвет`);

	const handleOnChangeColor = e => {
		const {value} = e.target;

		if (favoriteColor.includes(value)) {
			setFavoriteColor(favoriteColor.filter(color => color !== value));
		} else {
			setFavoriteColor([...favoriteColor, value]);
		}
	};

	const favoriteColorValid = color => {
		if (color.length === 0) {
			setIsFavoriteColorValid(false);

			return false;
		} else {
			setIsFavoriteColorValid(true);

			return true;
		}
	};

	const handleOnClick = e => {
		if (favoriteColorValid(favoriteColor)) {
			setFavoriteColor([]);
		} else {
			e.preventDefault();
		}
	};

	return (
		<SectionWrapper
			sectionClass='additional-information'
			title='Дополнительная информация'
			titleClass='additional-information__title'
			form={true}
			formClass='additional-information__form'
			link='/thanks'
			linkText='Продолжить'
			onClickLink={handleOnClick}
		>
			<div className='favorite-color' onChange={handleOnChangeColor}>
				<h3 className='favorite-color__title'>Любимый цвет</h3>
				<FavoriteColor color='Red' />
				<FavoriteColor color='Orange' />
				<FavoriteColor color='Yellow' />
				<FavoriteColor color='Green' />
				<FavoriteColor color='Cyan' />
				<FavoriteColor color='Blue' />
				<FavoriteColor color='Purple' />
				<FavoriteColor color='Pink' />
				<FavoriteColor color='Black' />
				{isFavoriteColorValid ? null : (
					<ValidError text={favoriteColorValidError} />
				)}
			</div>
		</SectionWrapper>
	);
}
