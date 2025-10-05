const metadata = {
	ru: {
		main: {
			title: 'Underwood - туи и ягоды',
			description:
				'Питомник туй в Беларуси, Минск, д. Обчак. Туи: Брабант, Смарагд',
			openGraph: {
				title: 'Underwood - туи и ягоды',
				description:
					'Питомник туй в Беларуси, Минск, д. Обчак. Туи: Брабант, Смарагд',
				url: 'https://underwood.by/ru',
				siteName: 'Underwood',
				locale: 'ru-BY',
				type: 'website',
			},
		},
	},
	en: {
		main: {
			title: 'Underwood - thujas & berries',
			description:
				'Thuja nursery in Belarus, Minsk, Obchak village. Thujas: Brabant, Smaragd',
			openGraph: {
				title: 'Underwood - thujas & berries',
				description:
					'Thuja nursery in Belarus, Minsk, Obchak village. Thujas: Brabant, Smaragd',
				url: 'https://underwood.by/en',
				siteName: 'Underwood',
				locale: 'en',
				type: 'website',
			},
		},
	},
};
export function selectMetadata(locale: string) {
	if (locale in metadata) {
		return metadata[locale as keyof typeof metadata];
	}

	return metadata.ru;
}
