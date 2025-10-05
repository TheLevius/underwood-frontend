import localFont from 'next/font/local';

export const gillSans = localFont({
	src: [
		{
			path: '../../public/fonts/GillSans/GillSansLightC.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GillSans/GillSansLightC-Italic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../../public/fonts/GillSans/GillSansC.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GillSans/GillSansC-Italic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../../public/fonts/GillSans/GillSansC-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GillSans/GillSansC-BoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../../public/fonts/GillSans/GillSansExtraBoldC.woff2',
			weight: '800',
			style: 'normal',
		},
	],
	variable: '--font-gill-sans',
	display: 'swap',
});
