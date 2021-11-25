/** @format */

import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Recipe from './Recipe';

const NavigationDefinition = () => {
	return (
		<div>
			<Routes>
				<Route path='/home' element={<HomePage />} />
				<Route path='recipe/:id' element={<Recipe />} />
			</Routes>
		</div>
	);
};

export default NavigationDefinition;
