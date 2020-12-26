import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import 'swiper/swiper.scss';

import './product-list.scss';

// ! шрифт 500

const filters = [
	{
		id: 1,
		title: 'Гарантированная доходность',
	},
	{
		id: 2,
		title: 'Регулярная доходность',
	},
	{
		id: 3,
		title: 'Ставка на рост',
	}
]

export default class ProductList extends Component {

	state = {
		filterId: 1,
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

		return (
			<div className="product-list" >
				<div className="product-list__header">
					<div className="product-list__title">Лучшие готовые инвестиционные решения</div>
					<div className="product-list__filters filters">

						<Swiper tag="div"
							grabCursor={true}
							slidesPerView={'auto'}
							// centeredSlides={true}
							freeMode={true}
							preventClicks={true}
							// preventClicksPropagation={true}
							// freeModeSticky={true}
							// centerInsufficientSlides={true}
							// normalizeSlideIndex={true}
							// centerSlidesBounds={true}
							// centeredSlides={true}
							// spaceBetween={12}
							updateOnWindowResize={true}
							watchOverflow={true}
						// slidesOffsetBefore={12}
						// slidesOffsetAfter={12}
						// breakpoints={{
						// 	320: {
						// 		slidesPerView: 'auto',
						// 		// spaceBetween: 20
						// 	},
						// 	// when window width is >= 640px
						// 	767: {
						// 		slidesPerView: 3,
						// 		allowTouchMove: false,
						// 		slidesPerView: 'auto',
						// 	}
						// }}
						>
							{filtersView}
						</Swiper>

					</div>
				</div>
				<div className="product-list__products">

				</div>
			</div>
		)
	}
}