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
		<Container maxWidth='100%'>
			<header>
				<Header />
			</header>
			<main>
				<Box sx={{ flexGrow: '1', margin: '2em 0' }}>
					<Grid container spacing={5} justifyContent='center'>
						{recipes.map((recipe, i) => {
							return (
								<Grid key={i} item xs={10} sm={6} md={4} lg={3} xl={2}>
									<RecipeCard recipe={recipe} />
								</Grid>
							);
						})}
						{recipes.map((recipe, i) => {
							return (
								<Grid key={i} item xs={10} sm={6} md={4} lg={3} xl={2}>
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
