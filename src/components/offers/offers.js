import React from 'react';

import './offers.scss';

const columns = [
	{
		id: 1,
		text: 'Возможность получать доход выше, чем по вкладу',
		image: (
			<svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" clipRule="evenodd" d="M23.3008 3.03389C22.8298 2.92995 22.3185 3.0651 21.9525 3.43934L7.42968 18.2886C6.85677 18.8744 6.85677 19.8241 7.42968 20.4099C8.00259 20.9957 8.93146 20.9957 9.50437 20.4099L21.4619 8.18361V37.533C21.4619 38.3432 22.1187 39 22.9289 39C23.7392 39 24.396 38.3432 24.396 37.533V8.04226L36.4961 20.4143C37.069 21.0001 37.9978 21.0001 38.5708 20.4143C39.1437 19.8285 39.1437 18.8788 38.5708 18.293L24.0479 3.44375C23.8357 3.22672 23.5745 3.0901 23.3008 3.03389ZM3.5 48C2.67157 48 2 48.6716 2 49.5C2 50.3284 2.67157 51 3.5 51H42.5C43.3284 51 44 50.3284 44 49.5C44 48.6716 43.3284 48 42.5 48H3.5Z" fill="black" />
			</svg>
		),
	},
	{
		id: 2,
		text: 'Фиксированный срок инвестирования',
		image: (
			<svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M43.5 6V21.7962C43.5 29.1047 40.0997 35.9972 34.3001 40.4445L23 49.1097L11.6999 40.4445C5.90032 35.9972 2.5 29.1047 2.5 21.7962V6C2.5 5.17157 3.17157 4.5 4 4.5H42C42.8284 4.5 43.5 5.17157 43.5 6Z" stroke="black" strokeWidth="3" />
			</svg>
		),
	},
	{
		id: 3,
		text: 'Получите +13% к инвестициям ежегодно',
		image: (
			<svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="2.96721" height="54.9919" rx="1.48361" transform="matrix(0.699206 0.714921 -0.699206 0.714921 40.4512 7)" fill="black" />
				<circle cx="10.5" cy="15.8447" r="7" stroke="black" strokeWidth="3" />
				<circle cx="34.5" cy="39.8447" r="7" stroke="black" strokeWidth="3" />
			</svg>
		),
	},
	{
		id: 4,
		text: 'Все инвестиции онлайн в одном приложении',
		image: (
			<svg width="48" height="56" viewBox="0 0 48 56" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect x="3.5" y="5.5" width="29" height="45" rx="2.5" stroke="black" strokeWidth="3" />
				<rect x="11" y="40" width="14" height="3" rx="1.5" fill="black" />
			</svg>
		),
	},
]

const Offers = () => {

	const columnsView = columns.map(({ id, text, image }) => (
		<div key={id} className="offers__column">
			<div className="offers__icon-wrap">
				<div className="offers__icon-image">
					{image}
				</div>
			</div>
			<div className="offers__text-wrap">
				<span className="offers__text">{text}</span>
			</div>
		</div>
	));

	return (
		<div className="offers">
			<div className="wrap">
				<div className="offers__wrap">
					{columnsView}
				</div>
			</div>
		</div>
	);
}

export default Offers;