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
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import { getPlaiceholder } from 'plaiceholder'

const Home = (props) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<title>Savonnerie La Curieuse - Création de savons écologiques</title>
			</Head>

			<Nav />

			<section>
				<div className='background'>
					<div className='colour'></div>
					<div className='image'>
						<Image
							src='/images/accueil.webp'
							alt='Bannière: des fleurs du jardin'
							layout='fill'
							objectFit='cover'
							placeholder='blur'
							blurDataURL={props.accueil}
						/>
					</div>
				</div>

				<div className='wrapper accueil'>
					<div>
						<h1>
							<span>Savonnerie</span>
							<span>La Curieuse</span>
						</h1>
						<h2 role='presentation'>création de savons écologiques</h2>
					</div>
				</div>
			</section>

			<main>
				<div className='intro'>
					<p>
						C&apos;est à Vollore-Ville au coeur du parc régional Livradois-Forez que j&apos;ai choisi de créer des
						savons surgras à partir du procédé de saponification à froid.
					</p>
					<p>
						Motivée par le désir de faire partager au plus grand nombre les bienfaits d&apos;un savon doux et
						écologique, je crée en mars 2016 la savonnerie La Curieuse.
					</p>
				</div>

				<Categorie
					id='saf'
					title='La saponification à froid'
					alt='Savons découpé dans leurs moules'
					placeholder={props.categories[0]}
				/>
				<Fabrication fabrication={props.fabrication} />

				<Categorie
					id='savons'
					title='Les savons'
					alt='Tout les savons découpés vu de haut'
					placeholder={props.categories[1]}
				/>
				<Savons savons={props.savons} />

				<Categorie
					id='ouTrouver'
					title='Où les trouver ?'
					alt='Stand de marché avec César & karité'
					placeholder={props.categories[2]}
				/>
				<Disponible />

				<Categorie
					id='contact'
					title='Me contacter'
					alt="Vue d'ensemble de Vollore-Ville"
					placeholder={props.categories[3]}
				/>
				<Contact />

				<Questions faq={props?.faq} />
			</main>

			<Footer savons={props?.savons} />
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

	const filePath = path.join(process.cwd(), 'public', 'database.json')
	const fileContents = fs.readFileSync(filePath, 'utf8')
	let database = JSON.parse(fileContents)
	const { fabrication, savons } = database

	// Paths
	const fabrPaths = fabrication.map((item) => `/images/fabrication/${item.id}.jpg`)
	const savPaths = savons.map((item) => `/images/savons/${item.id}.jpg`)
	const categories = ['saf', 'savons', 'ouTrouver', 'contact']
	const fabrBlurs = await getBlurDataURL(fabrPaths)

	// blurDataURL
	const savBlurs = await getBlurDataURL(savPaths)
	const catBlurs = await getBlurDataURL(categories.map((id) => `/images/categorie/${id}.webp`))
	const accBlur = await getBlurDataURL(['/images/accueil.webp'])

	const addDataURL = (target, blurs) => target.map((e, i) => ({ ...e, blurDataURL: blurs[i] }))

	database = {
		...database,
		fabrication: addDataURL(fabrication, fabrBlurs),
		savons: addDataURL(savons, savBlurs),
		accueil: accBlur,
		categories: catBlurs,
	}

	return {
		props: { ...database },
	}
}

export default Home
