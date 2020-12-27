import React, { Component } from 'react';

import ProductList from '../components/product-list';
import { productListData } from '../data';

export default class ProductListContainer extends Component {

	state = {
		filterId: null,
		products: [],
	}

	componentDidMount() {
		this.updateFilter(1);
	}

	updateProducts = (filterId) => {
		return productListData.filter((item) => (
			!filterId || filterId === 1 || item.filterId === filterId));
	}

	updateFilter = (filterId) => {
		this.setState({
			filterId,
			products: this.updateProducts(filterId)
		});
	}

	render() {
		const { filterId, products } = this.state;

		return (
			<ProductList filterId={filterId} products={products}
				updateFilter={this.updateFilter} />
		);
	}
}