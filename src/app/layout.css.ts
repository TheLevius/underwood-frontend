import { style } from '@vanilla-extract/css';

const flexColumn = {
	display: 'flex',
	flexDirection: 'column',
} as const;

export const headerSection = style(flexColumn);
export const mainSection = style(flexColumn);
export const footerSection = style(flexColumn);

export const title = style({
	fontSize: '32px',
	lineHeight: 1.5,
});

export const description = style({
	fontSize: '20px',
	lineHeight: 1.25,
});
