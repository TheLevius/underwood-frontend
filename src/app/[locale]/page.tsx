import { routing } from '@/i18n/routing';
import { mainSection } from './Main.css';
import { getLocale } from 'next-intl/server';
import { selectMetadata } from '@/utils/metadata';
export async function generateStaticParams(): Promise<{ locale: string }[]> {
	return routing.locales.map((locale) => ({ locale }));
}
export async function generateMetadata() {
	const locale = await getLocale();
	const { main } = selectMetadata(locale);
	return main;
}
export default async function Main({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	return <main className={mainSection}>{'Main content'}</main>;
}
