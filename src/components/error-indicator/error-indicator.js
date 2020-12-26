import React from 'react';

import './error-indicator.scss';

const ErrorIndicator = () => {

	return (
		<div className="error-indicator">
			<div className="container">
				<div className="error-indicator__text-wrapper">
					<h1 className="error-indicator__title">Страница не найдена</h1>
				</div>
			</div>
		</div>
	);
}

export default ErrorIndicator;