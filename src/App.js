/** @format */

import axios from 'axios';

import './index.css';

function App() {
	axios
		.get('https://cdn.contentful.com/spaces/5xjh8nhjizdc/entries?access_token=PCho7WhGHIZgE_Wt2AjZnhLm7HVDHvF8pm9MmYnjdHM')
		.then((res) => console.log(res.data.items[0].fields.ingredients.content[0].content[0].value));
	return <div className='App'></div>;
}

export default App;
