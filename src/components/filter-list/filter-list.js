import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { filterListData } from '../../data';

import 'swiper/swiper.scss';

import './filter-list.scss';

const FilterList = ({ filterId, updateFilter }) => {

	const filtersView = filterListData.map(({ id, title }) => {
		const classNames = `filters__btn ${(id === filterId) ? 'filters__btn_active' : ''}`;

		return (
			<SwiperSlide key={id} tag="div">
				<div className="filters__btn-wrap">
					<button className={classNames}
						onClick={() => updateFilter(id)}>
						{title}
					</button>
				</div>
			</SwiperSlide >
		);
	});

	return (
		<div className="filters">

			<Swiper tag="div"
				grabCursor={true}
				slidesPerView={'auto'}
				freeMode={true}
				preventClicks={true}
				updateOnWindowResize={true}
				watchOverflow={true}
				breakpoints={{
					320: {
						spaceBetween: 8
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
	)
}

export default FilterList;