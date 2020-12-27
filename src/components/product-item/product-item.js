import React from 'react';

import './product-item.scss';

const ProductItem = ({ product }) => {
	const { title, image, color, isDesign, investTime, investAmount, benefit } = product;

	const classNames = `product-item ${(isDesign)
		? 'product-item_design' : ''}`;

	return (
		<div className={classNames} style={{ backgroundColor: color }}>
			<div className="product-item__wrap">
				<div className="product-item__header">
					<div className="product-item__header-text">
						<div className="product-item__header-title">{title}</div>
					</div>
					<div className="product-item__header-icon">
						<div className="product-item__header-img">
							{image}
						</div>
					</div>
				</div>
				<div className="product-item__desc description">
					<div className="description__wrap">
						<div className="description__column">
							<div className="description__title">{investTime}</div>
							<div className="description__text">срок размещения</div>
						</div>
						<div className="description__column">
							<div className="description__title">{investAmount}</div>
							<div className="description__text">минимальная сумма</div>
						</div>
					</div>
				</div>
				<div className="product-item__benefit">
					<div className="product-item__benefit-bg"></div>
					<div className="product-item__benefit-wrap">
						<div className="product-item__benefit-percent">{benefit}%</div>
						<div className="product-item__benefit-desc">максимальная  доходность</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductItem;