import React, {useState} from 'react';
import {InputText} from '../InputText/InputText';
import {ValidError} from '../ValidError/ValidError';
import './personal-information.scss';
import {SectionWrapper} from '../SectionWrapper/SectionWrapper';

export function PersonalInformation() {
	const [name, setName] = useState(undefined);
	const [surname, setSurname] = useState(undefined);
	const [isNameValid, setIsNameValid] = useState(true);
	const [isSurnameValid, setIsSurnameValid] = useState(true);
	const [isNameLengthValid, setIsNameLengthValid] = useState(true);
	const [isSurnameLengthValid, setIsSurnameLengthValid] = useState(true);
	const [langValidError] = useState(`Введите русскими буквами`);
	const [lengthValidError] = useState(`Не менее 2-х символов`);

	const regexpValid = value => /^[А-Яа-яЁё\s]+$/i.test(value);

	const nameValid = name => {
		if (name !== undefined && name.length >= 2) {
			setIsNameLengthValid(true);

			if (regexpValid(name)) {
				setIsNameValid(true);

				return true;
			} else {
				setIsNameValid(false);

				return false;
			}
		} else {
			setIsNameLengthValid(false);

			return false;
		}
	};

	const surnameValid = surname => {
		if (surname !== undefined && surname.length >= 2) {
			setIsSurnameLengthValid(true);

			if (regexpValid(surname)) {
				setIsSurnameValid(true);

				return true;
			} else {
				setIsSurnameValid(false);

				return false;
			}
		} else {
			setIsSurnameLengthValid(false);

			return false;
		}
	};

	const handleOnChangeName = e => {
		const {value} = e.target;

		setName(value);
	};

	const handleOnChangeSurname = e => {
		const {value} = e.target;

		setSurname(value);
	};

	const handleOnClickLink = e => {
		if (nameValid(name) && surnameValid(surname)) {
			setName(undefined);
			setSurname(undefined);
		} else {
			e.preventDefault();
		}
	};

	return (
		<SectionWrapper
			sectionClass='personal-information'
			titleClass='personal-information__title'
			title='Личная информация'
			form={true}
			formClass='personal-information__form'
			link='/important-information'
			linkText='Продолжить'
			onClickLink={handleOnClickLink}
		>
			<InputText
				name='name'
				placeholder='Имя'
				errorClass={isNameValid && isNameLengthValid}
				onChange={handleOnChangeName}
			/>
			{isNameValid ? null : <ValidError text={langValidError} />}
			{isNameLengthValid ? null : <ValidError text={lengthValidError} />}
			<InputText
				name='surname'
				placeholder='Фамилия'
				errorClass={isSurnameValid && isSurnameLengthValid}
				onChange={handleOnChangeSurname}
			/>
			{isSurnameValid ? null : <ValidError text={langValidError} />}
			{isSurnameLengthValid ? null : <ValidError text={lengthValidError} />}
		</SectionWrapper>
	);
}
