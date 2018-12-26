import React from 'react';

export function FavoriteColor(props) {
	return (
		<label className='favorite-color__label'>
			<input
				className='favorite-color__checkbox'
				type='checkbox'
				name='favoriteColor'
				value={props.color}
			/>
			<span
				className={`favorite-color__tile favorite-color__tile--${props.color.toLowerCase()}`}
			/>
		</label>
	);
}
