import Head from 'next/head'
import Image from 'next/image'
import path from 'path'
import fs from 'fs'
import Savons from '../components/Savons'
import Fabrication from '../components/Fabrication'
import Disponible from '../components/Disponible'
import Questions from '../components/Questions'
import Categorie from '../components/Categorie'
import Contact from '../components/Contact'

import { getPlaiceholder } from 'plaiceholder'

const Home = (props) => {
	return (
		<>
			<Head>
				<title>Savonnerie La Curieuse - Création de savons écologiques</title>
				<meta name='keywords' content='savon, Vollore-Ville, ecologique,cosmetique, soin' />
				<meta
					name='description'
					content='Des savons 100% fait main crées à Vollore-Ville (Auvergne) selon la méthode ancestrale de saponification à froid.'
				/>
				<meta name='author' content='Valérie Cartailler' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charset='utf-8' />

				<link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png' />
				<link rel='mask-icon' href='safari-pinned-tab.svg' color='#e77224' />
				<link rel='shortcut icon' href='favicon.ico' />
				<meta name='theme-color' content='#e77224' />

				{/* eslint-disable */}
				<link
					href='https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap'
					rel='stylesheet'
				/>
			</Head>

			<div className='background'>
				<div className='colour'></div>
				<div className='image'></div>
			</div>

			<div className='wrapper'>
				<div className='accueil'>
					<nav>
						<a href='#saf'>la saponification à froid</a>
						<a href='#savons'>les savons</a>
						<a href='#ouTrouver'>où les trouver</a>
						<a href='#contact'>contact</a>
					</nav>

					<div className='titre'>
						<h1>
							<span>Savonnerie</span>
							<br />
							<span>La Curieuse</span>
						</h1>
						<p>création de savons écologiques</p>
					</div>
				</div>
			</div>

			<div className='content'>
				<div className='intro'>
					<p className='fat'>
						C&apos;est à Vollore-Ville au coeur du parc régional Livradois-Forez que j&apos;ai choisi de créer des
						savons surgras à partir du procédé de saponification à froid.
					</p>
					<p className='fat'>
						Motivée par le désir de faire partager au plus grand nombre les bienfaits d&apos;un savon doux et
						écologique, je crée en mars 2016 la savonnerie La Curieuse.
					</p>
				</div>

				<Categorie id='saf' title='La saponification à froid' placeholder={props.categories[0]} />
				<Fabrication {...props} />

				<Categorie id='savons' title='Les savons' placeholder={props.categories[1]} />
				<Savons {...props} />

				<Categorie id='ouTrouver' title='Où les trouver ?' placeholder={props.categories[2]} />
				<Disponible {...props} />

				<Categorie id='contact' title='Me contacter' placeholder={props.categories[3]} />
				<Contact></Contact>

				<Questions {...props} />
			</div>

			<footer>
				<div className='foot_wrap'>
					<div className='index'>
						<li>
							<a href='#savons'>Les savons</a>
						</li>
						<li>
							<a href='#ouTrouver'>Où les trouver</a>
						</li>
						<li>
							<a href='#contact'>Me contacter</a>
						</li>
					</div>

					<div className='logo'>
						<h2>
							Savonnerie
							<br />
							La Curieuse
						</h2>
						<p>
							<small>depuis 2016</small>
						</p>
					</div>
				</div>
			</footer>
		</>
	)
}

export async function getStaticProps() {
	async function getBlurDataURL(paths) {
		const res = await Promise.all(
			paths.map(async (src) => {
				const { base64 } = await getPlaiceholder(src)
				return base64
			})
		).then((values) => values)

		return res
	}

	const dataFilePath = path.join(process.cwd(), 'public', 'database.json')
	const fileContents = fs.readFileSync(dataFilePath, 'utf8')
	let database = JSON.parse(fileContents)

	// Fabrication
	const fabrPaths = database.fabrication.map((item) => `/images/fabrication/${item.id}.jpg`)
	const fabrBlurs = await getBlurDataURL(fabrPaths)

	// Savons
	const savPaths = database.savons.map((item) => `/images/savons/${item.id}.jpg`)
	const savBlurs = await getBlurDataURL(savPaths)

	// Categories
	const catPaths = [
		'/images/categorie/saf.jpg',
		'/images/categorie/savons.jpg',
		'/images/categorie/ouTrouver.jpg',
		'/images/categorie/contact.jpg',
	]
	const catBlurs = await getBlurDataURL(catPaths)

	database = {
		...database,
		fabrication: database.fabrication.map((elem, i) => ({
			...elem,
			blurDataURL: fabrBlurs[i],
		})),
		savons: database.savons.map((elem, i) => ({
			...elem,
			blurDataURL: savBlurs[i],
		})),
		categories: catBlurs,
	}

	console.log(database)

	return {
		props: {
			...database,
		},
	}
}

export default Home
