import { v4 as uuidv4 } from 'uuid';

export default [
	{
		id: uuidv4(),
		name: 'Hacker News',
		url: 'https://news.ycombinator.com/',
		points: 0,
	},
	{
		id: uuidv4(),
		name: 'Product Hunt',
		url: 'https://producthunt.com/',
		points: 0,
	},
	{
		id: uuidv4(),
		name: 'REDDIT',
		url: 'https://www.reddit.com/',
		points: 0,
	},
];
