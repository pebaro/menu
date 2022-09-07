import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


function App() {
	const originalItems = items;

	const allCategories = [
		'all',
		...new Set(
			originalItems.map(item => item.category)
		)
	];
	const [menuItems, setMenuItems] = useState(originalItems);
	// eslint-disable-next-line
	const [categories, setCategories] = useState(allCategories);

	const filterItems = category => {
		if (category === 'all') {
			setMenuItems(originalItems);
			return;
		}
		return setMenuItems(originalItems.filter(
			item => item.category === category
		));
	}

	return (
		<main className='menu section'>
			<div className="title">
				<h2>our menu</h2>
				<div className="underline"></div>
			</div>
			<Categories categories={categories} filterItems={filterItems} />
			<Menu menuItems={menuItems} />
		</main>
	);
}

export default App;
