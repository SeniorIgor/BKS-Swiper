import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import ProductItem from '../product-item';
import { filters, products } from '../../data';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

import './product-list.scss';

// ! шрифт 500

SwiperCore.use([Pagination]);

export default class ProductList extends Component {

	state = {
		filterId: null,
	}

	toggleWidth(e) {
		const fieldValueWidth = document.querySelector(".valueWidth");
		fieldValueWidth.innerText = window.innerWidth + " px";
	}

	render() {
		const { filterId } = this.state;

		const filtersView = filters.map(({ id, title }) => {
			const classNames = `filters__btn ${(id === filterId) ? 'filters__btn_active' : ''}`;

			return (
				<SwiperSlide key={id} tag="div">
					<div className="filters__btn-wrap">
						<button className={classNames}
							onClick={() => this.setState({ filterId: id })}>
							{title}
						</button>
					</div>
				</SwiperSlide >
			);
		});

		const productsView = products
			.filter(item => (!filterId) || item.filterId === filterId)
			.map((item) => (
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
					<div className="product-list__filters filters">

						<Swiper tag="div"
							grabCursor={true}
							slidesPerView={'auto'}
							freeMode={true}
							preventClicks={true}
							updateOnWindowResize={true}
							watchOverflow={true}
							breakpoints={{
								320: {
									spaceBetween: 9
								},
								767: {
									spaceBetween: 12
								},
								1535: {
									spaceBetween: 16
								}
							}}
						>
							{filtersView}
						</Swiper>

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
}