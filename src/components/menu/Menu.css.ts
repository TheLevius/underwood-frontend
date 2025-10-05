import { style } from '@vanilla-extract/css';

export const navPanel = style({
	display: 'flex',
	flexDirection: 'column',
});

export const list = style({
	display: 'flex',
	justifyContent: 'space-between',
	listStyle: 'none',
});
export const linkBtn = style({
	backgroundColor: '#007bff',
	color: 'white',
	padding: '10px 20px',
	border: 'none',
	borderRadius: '4px',
	cursor: 'pointer',
	':hover': {
		backgroundColor: '#0056b3',
	},
});
