import React from 'react';

import Offers from '../offers';
import ProductListContainer from '../../containers';

import './app.scss';

const App = () => {

	return (
		<div className="app">
			<div className="container">
				<div className="app__wrap">
					<Offers />
					<ProductListContainer />
				</div>
			</div>
		</div>
	);
}

export default App;
