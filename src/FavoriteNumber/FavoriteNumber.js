import React from 'react';

export function FavoriteNumber(props) {
	return (
		<label className='radio-group__label'>
			<p className='radio-group__text'>{props.text}</p>
			<input
				className='radio-group__radion-btn'
				type='radio'
				value={props.value}
				name='favoriteNumber'
			/>
		</label>
	);
}
