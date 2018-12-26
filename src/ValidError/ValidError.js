import React from 'react';
import './valid-error.scss';

export function ValidError(props) {
	return <p className='valid-error'>{props.text}</p>;
}
