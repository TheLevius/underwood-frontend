import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const gillSans = localFont({
	src: [
		{
			path: './fonts/GillSansC.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/GillSansC-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
	],
	variable: '--font-gill-sans',
	display: 'swap',
	fallback: ['sans-serif'],
	adjustFontFallback: false,
});

export const metadata: Metadata = {
	title: 'Underwood - питомник туй',
	description:
		'Питомник туй в Беларуси, Минск, д. Обчак. Туи: Брабант, Смарагд',
	openGraph: {
		title: 'Underwood - питомник туй',
		description:
			'Питомник туй в Беларуси, Минск, д. Обчак. Туи: Брабант, Смарагд',
		url: 'https://underwood.by',
		siteName: 'Underwood',
		locale: 'ru-RU',
		type: 'website',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru' className={gillSans.className}>
			<body>{children}</body>
		</html>
	);
}
