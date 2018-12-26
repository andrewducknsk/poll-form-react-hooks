import React from 'react';

export const InputText = props => {
	return (
		<input
			className={`personal-information__field ${
				props.errorClass ? '' : 'personal-information__field--error'
			}`}
			type='text'
			name={props.name}
			placeholder={props.placeholder}
			onChange={props.onChange}
		/>
	);
};
