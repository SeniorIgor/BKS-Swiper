import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import ProductItem from '../product-item';
import FilterList from '../filter-list';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import './product-list.scss';

// ! шрифт 500

SwiperCore.use([Pagination]);

const ProductList = ({ products, filterId, updateFilter }) => {

	const productsView = products.map((item) => (
		<SwiperSlide key={item.id}>
			<div className="products__item">
				<ProductItem product={item} />
			</div>
		</SwiperSlide>
	));

	return (
		<div className="product-list" >
			<div className="product-list__header">
				<div className="product-list__title">Лучшие готовые инвестиционные решения</div>

				<div className="product-list__filters">
					<FilterList filterId={filterId} updateFilter={updateFilter} />
				</div>
			</div>
			<div className="product-list__products">
				<div className="product-list__products-wrap">
					<Swiper tag="div"
						grabCursor={true}
						slidesPerView={'auto'}
						spaceBetween={12}
						preventClicks={true}
						updateOnWindowResize={true}
						watchOverflow={true}
						breakpoints={{
							320: {
								spaceBetween: 8
							},
							767: {
								spaceBetween: 12
							}
						}}
						pagination={{
							el: '.swiper-pagination',
							clickable: true,
						}}
					>
						{productsView}
					</Swiper>
					<div className="product-list__pagination">
						<div className="swiper-pagination"></div>
					</div>
				</div>
			</div>
		</div >
	)
}

export default ProductList;