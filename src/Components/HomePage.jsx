/** @format */
import RecipeCard from './RecipeCard';
import { useState, useEffect } from 'react';
import { client } from './client';
import { Grid, Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

import './../index.css';

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		client
			.getEntries()
			.then((res) => setRecipes(res.items))
			.catch((err) => console.error(err));
	}, []);
	return (
		<Container>
			<header>
				<Header />
			</header>
			<main>
				<Box sx={{ flexGrow: 1, margin: '2em 0' }}>
					<Grid container spacing={2} justifyContent='center'>
						{recipes.map((recipe, i) => {
							return (
								<Grid key={i} item xs={9} sm={6} md={4} lg={3}>
									<RecipeCard recipe={recipe} />
								</Grid>
							);
						})}
					</Grid>
				</Box>
			</main>
			<footer>
				<Footer />
			</footer>
		</Container>
	);
};

export default HomePage;
