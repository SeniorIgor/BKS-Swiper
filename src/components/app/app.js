import React from 'react';

import Offers from '../offers';
import ProductList from '../product-list';

import './app.scss';

const App = () => {

	return (
		<div className="app">
			<div className="container">
				<div className="app__wrap">
					<Offers />
					<ProductList />
				</div>
			</div>
		</div>
	);
}

export default App;
