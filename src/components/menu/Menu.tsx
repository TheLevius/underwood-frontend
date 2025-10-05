import Link from 'next/link';
import { navPanel, linkBtn, list } from './Menu.css';
import { getTranslations } from 'next-intl/server';
export type Item = {
	title: string;
	path: string;
};
export const Menu = async () => {
	const t = await getTranslations('menu');
	const menuItems = [
		{ title: t('main'), path: '/' },
		{ title: t('catalog'), path: '/catalog' },
	];
	return (
		<nav className={navPanel}>
			<ul className={list}>
				{menuItems.map(({ title, path }) => (
					<li key={title}>
						<Link className={linkBtn} href={path}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};
