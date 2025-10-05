import { Menu } from '@/components/menu/Menu';
import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { gillSans } from '@/fonts/fonts';

export default async function LocaleLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body className={gillSans.variable}>
				<header>
					<Menu />
				</header>
				{children}
				<footer></footer>
			</body>
		</html>
	);
}
