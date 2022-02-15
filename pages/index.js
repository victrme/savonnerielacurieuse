import Head from 'next/head'
import Image from 'next/image'
import path from 'path'
import fs from 'fs'
import Savons from '../components/Savons'
import Fabrication from '../components/Fabrication'
import Disponible from '../components/Disponible'
import Questions from '../components/Questions'
import Table from '../components/table'

const Home = (params) => {
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
				<link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png?v=rMJOo8Wqzp' />
				<link rel='icon' type='image/png' sizes='32x32' href='favicon-32x32.png?v=rMJOo8Wqzp' />
				<link rel='icon' type='image/png' sizes='16x16' href='favicon-16x16.png?v=rMJOo8Wqzp' />
				<link rel='manifest' href='site.webmanifest?v=rMJOo8Wqzp' />
				<link rel='mask-icon' href='safari-pinned-tab.svg?v=rMJOo8Wqzp' color='#e77224' />
				<link rel='shortcut icon' href='favicon.ico?v=rMJOo8Wqzp' />
				<meta name='msapplication-TileColor' content='#e77224' />
				<meta name='theme-color' content='#e77224' />
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
						C'est à Vollore-Ville au coeur du parc régional Livradois-Forez que j'ai choisi de créer des savons
						surgras à partir du procédé de saponification à froid.
					</p>
					<p className='fat'>
						Motivée par le désir de faire partager au plus grand nombre les bienfaits d'un savon doux et
						écologique, je crée en mars 2016 la savonnerie La Curieuse.
					</p>
				</div>

				<div id='saf' className='categorie'>
					<div></div>
					<h2>La saponification à froid</h2>
				</div>

				<div className='wrapper'>
					<div className='fabr_intro'>
						<p className='fat'>
							Cette méthode de fabrication artisanale garantit la présence de glycérine dans le savon et permet
							de conserver une grande partie des propriétés bienfaisantes des huiles, beurres et huiles
							essentielles utilisés. <br />
							C'est une méthode écologique dont le procédé de fabrication est sobre en énergie.
						</p>
					</div>

					<Fabrication {...params} />

					<div className='info_wrap'>
						<div className='info_box'>
							<h3>La saponification</h3>
							<p>
								<span>
									La saponification est la réaction chimique qui transforme le mélange huile + soude en savon
									+ glycérine.
								</span>
								<br />
								<br />
								<span>Il ne reste aucune trace de soude dans un savon "fini".</span>
							</p>
						</div>
						<div className='info_box'>
							<h3>Le surgras</h3>
							<p>
								<span>
									En cours de fabrication, j'enrichis mes savons d'huiles aux vertus apaisantes,
									régénérantes, et nourrissantes. Ces huiles, ajoutées aux corps gras déjà saponifiés
									viennent sur-graisser le savon.
								</span>
								<br />
								<span>
									Un savon surgras est un savon qui ne se contente pas de laver, il permet aussi au film
									hydrolipidique de la peau de se restaurer plus rapidement.
								</span>
							</p>
						</div>
					</div>
				</div>

				<div id='savons' className='categorie'>
					<div></div>
					<h2>Les savons</h2>
				</div>

				<div className='wrapper'>
					<Savons {...params} />
				</div>

				<div id='ouTrouver' className='categorie'>
					<div></div>
					<h2>Où les trouver ?</h2>
				</div>

				<div className='wrapper'>
					<Disponible {...params} />

					<div className='wrapper'>
						<h3 id='events'>Evènements 2021</h3>

						<Table {...params} />
					</div>
				</div>

				<div id='contact' className='categorie'>
					<div></div>
					<h2>Me contacter</h2>
				</div>

				<div className='wrapper'>
					<div className='adresse'>
						<div id='map'>
							<p id='mapText'>
								Afficher sur la carte
								<noscript>La carte n'est pas disponible</noscript>
							</p>
						</div>
						<div className='location'>
							<p>
								Valérie Cartailler
								<br />
								Rue du Château
								<br />
								63120 Vollore-Ville
							</p>
							<p>
								savonnerielacurieuse
								<wbr />
								@gmail.com
								<br />
								06 43 69 39 67
							</p>
						</div>
					</div>
				</div>

				<div className='wrapper'>
					<Questions {...params} />
				</div>
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
	const dataFilePath = path.join(process.cwd(), 'events', 'database.json')
	console.log(dataFilePath) // will be YourProject/events/events.json

	const fileContents = fs.readFileSync(dataFilePath, 'utf8')
	const data = JSON.parse(fileContents)

	return {
		props: {
			...data,
		},
	}
}

export default Home
