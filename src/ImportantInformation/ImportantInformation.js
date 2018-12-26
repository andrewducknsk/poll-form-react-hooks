import React, {useState} from 'react';
import {FavoriteNumber} from '../FavoriteNumber/FavoriteNumber';
import {ValidError} from '../ValidError/ValidError';
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';
import './important-information.scss';
import './favorite-musician.scss';
import './radio-group.scss';

export function ImportantInformation() {
	const [favoriteNumber, setFavoriteNumber] = useState(undefined);
	const [isfavoriteNumberValid, setIsFavoriteNumberValid] = useState(true);
	const [favoriteNumberValidError] = useState(`Выберите любимое число`);
	const [favoriteMusician, setFavoriteMusician] = useState(undefined);
	const [isfavoriteMusicianValid, setIsFavoriteMusicianValid] = useState(true);
	const [favoriteMusicianValidError] = useState(`Выберите любимую группу`);

	const favoriteNumberValid = number => {
		if (number !== undefined && number !== '') {
			setIsFavoriteNumberValid(true);

			return true;
		} else {
			setIsFavoriteNumberValid(false);

			return false;
		}
	};

	const favoriteMusicianValid = musician => {
		if (musician !== undefined && musician !== '') {
			setIsFavoriteMusicianValid(true);

			return true;
		} else {
			setIsFavoriteMusicianValid(false);

			return false;
		}
	};

	const handleOnChangeRadioBtn = e => {
		const {value} = e.target;

		setFavoriteNumber(value);
	};

	const handleOnChangeSelect = e => {
		const {value} = e.target;

		setFavoriteMusician(value);
	};

	const handleOnClickLink = e => {
		if (
			favoriteNumberValid(favoriteNumber) &&
			favoriteMusicianValid(favoriteMusician)
		) {
			setFavoriteNumber(undefined);
			setFavoriteMusician(undefined);
		} else {
			e.preventDefault();
		}
	};

	return (
		<SectionWrapper
			sectionClass='important-information'
			title='Очень важная информация'
			titleClass='important-information__title'
			form={true}
			formClass='important-information__form'
			link='/additional-information'
			linkText='Продолжить'
			onClickLink={handleOnClickLink}
		>
			<div className='radio-group' onChange={handleOnChangeRadioBtn}>
				<h3 className='radio-group__title'>Любимая цифра</h3>
				<FavoriteNumber text='0' value='0' />
				<FavoriteNumber text='1' value='1' />
				<FavoriteNumber text='2' value='2' />
				<FavoriteNumber text='3' value='3' />
				<FavoriteNumber text='4' value='4' />
				<FavoriteNumber text='5' value='5' />
				{isfavoriteNumberValid ? null : (
					<ValidError text={favoriteNumberValidError} />
				)}
			</div>
			<div className='favorite-musician'>
				<h3 className='favorite-musician__title'>Любимая музыкальная группа</h3>
				<select
					className='favorite-musician__select'
					name='favoriteMusician'
					onChange={handleOnChangeSelect}
					required
				>
					<option value=''>Выберите группу</option>
					<option value='Queen'>Queen</option>
					<option value='AC/DC'>AC/DC</option>
					<option value='The Beatles'>The Beatles</option>
					<option value='Kiss'>Kiss</option>
				</select>
				{isfavoriteMusicianValid ? null : (
					<ValidError text={favoriteMusicianValidError} />
				)}
			</div>
		</SectionWrapper>
	);
}
