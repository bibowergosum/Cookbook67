/** @format */

import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';

const NavigationDefinition = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<HomePage />} />
			</Routes>
		</div>
	);
};

export default NavigationDefinition;
