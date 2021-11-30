/** @format */

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './../index.css';

const Recipe = () => {
	const { id } = useParams();
	const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			await axios
				.get(`https://cdn.contentful.com/spaces/${process.env.REACT_APP_SPACE_ID}/entries?access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
				.then((res) => setRecipes(res.data.items))
				.catch((err) => console.error(err));
			setIsLoading(false);
		};
		fetchData();
	}, []);

	const recipe = recipes.filter((el) => {
		return el.sys.id === id;
	});
	// console.log(recipe);
	return <div>{!isLoading ? <p>{recipe[0].fields.title}</p> : 'loading...'}</div>;
};

export default Recipe;
