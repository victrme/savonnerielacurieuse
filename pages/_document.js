import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang='fr'>
			<Head>
				<meta
					name='description'
					content='Des savons 100% fait main crées à Vollore-Ville (Auvergne) selon la méthode ancestrale de saponification à froid.'
				/>
				<meta name='keywords' content='savon, Vollore-Ville, ecologique,cosmetique, soin' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />

				<link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />
				<link rel='icon' href='favicon.ico' />

				<meta property='og:url' content='https://www.savonnerielacurieuse.com/' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Savonnerie La Curieuse - Création de savons écologiques' />
				<meta
					property='og:description'
					content='Des savons 100% fait main crées à Vollore-Ville (Auvergne) selon la méthode ancestrale de saponification à froid.'
				/>
				<meta property='og:image' content='/images/preview.webp' />

				<meta name='twitter:card' content='summary_large_image' />
				<meta property='twitter:domain' content='savonnerielacurieuse.com' />
				<meta property='twitter:url' content='https://www.savonnerielacurieuse.com/' />
				<meta name='twitter:title' content='Savonnerie La Curieuse - Création de savons écologiques' />
				<meta
					name='twitter:description'
					content='Des savons 100% fait main crées à Vollore-Ville (Auvergne) selon la méthode ancestrale de saponification à froid.'
				/>
				<meta name='twitter:image' content='/images/preview.webp' />
			</Head>

			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
