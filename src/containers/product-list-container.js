import React, { Component } from 'react';

import ProductList from '../components/product-list';
import { filters, products } from '../data';

export default class ProductListContainer extends Component {

	state = {
		filterId: 1,
		filters: [],
		products: [],
	}

	componentDidMount() {
		this.setState({ filters, products });
	}

	render() {

		return (
			<ProductList products={this.state.products} />
		);
	}
}