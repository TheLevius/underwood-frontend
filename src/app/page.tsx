import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<h1 className={styles.title}>Underwood - питомник туй</h1>
				<p className={styles.description}>
					Питомник туй в Беларуси, Минск, д. Обчак. Туи: Брабант, Смарагд
				</p>
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
}
