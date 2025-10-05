import { getLocale, getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { gillSans } from '@/fonts/fonts';
import {
	headerSection,
	mainSection,
	footerSection,
	title,
	description,
} from './layout.css';
import { Menu } from '@/components/menu/Menu';
export default async function NotFound() {
	const { 0: locale, 1: t } = await Promise.all([
		getLocale(),
		getTranslations(),
	]);

	return (
		<html lang={locale}>
			<body className={gillSans.variable}>
				<header className={headerSection}>
					<Menu />
				</header>
				<main className={mainSection}>
					<h1 className={title}>{t('notFound.title')}</h1>
					<p className={description}>{t('notFound.description')}</p>
				</main>
				<footer className={footerSection}></footer>
			</body>
		</html>
	);
}
