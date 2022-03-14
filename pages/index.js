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

			<div className='background'>
				<div className='colour'></div>
				<div className='image'>
					<Image
						src='/images/banniere/accueil.jpg'
						alt='Bannière: des glands du jardin'
						layout='fill'
						objectFit='cover'
						placeholder='blur'
						blurDataURL={props.accueil}
					/>
				</div>
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
				<Fabrication fabrication={props.fabrication} />

				<Categorie id='savons' title='Les savons' placeholder={props.categories[1]} />
				<Savons savons={props.savons} />

				<Categorie id='ouTrouver' title='Où les trouver ?' placeholder={props.categories[2]} />
				<Disponible />

				<Categorie id='contact' title='Me contacter' placeholder={props.categories[3]} />
				<Contact />

				<Questions {...props} />
			</div>

			<footer>
				<div className='index'>
					<div>
						<h3>
							<a href='#saf'>La saponification à froid</a>
						</h3>

						<li>
							<a href='#creation-de-savon'>Création du savon Fanny</a>
						</li>
						<li>
							<a href='#saponification-surgras'>Le processus</a>
						</li>
					</div>

					<div>
						<h3>
							<a href='#savons'>Les savons</a>
						</h3>
						{props.savons.map((item) => (
							<li key={item.id}>
								<a href={'#' + item.id}>{item.title}</a>
							</li>
						))}
					</div>

					<div>
						<h3>
							<a href='#ouTrouver'>Où les trouver</a>
						</h3>

						<li>
							<a href='#savonnerie'>A la savonnerie</a>
						</li>

						<li>
							<a href='#boutiques'>En boutique</a>
						</li>

						<li>
							<a href='#marches'>Aux marchés</a>
						</li>

						<li>
							<a href='#events'>Aux évènements</a>
						</li>
					</div>

					<div>
						<h3>
							<a href='#contact'>Me contacter</a>
						</h3>
					</div>

					<div>
						<h3>
							<a href='#foire-aux-questions'>Foire aux Questions</a>
						</h3>
					</div>
				</div>

				<div className='logo'>
					<h2>
						<p>Savonnerie</p>
						<p>La Curieuse</p>
					</h2>
					<p>
						<small>depuis 2016</small>
					</p>
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
