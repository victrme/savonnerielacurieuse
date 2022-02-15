import Head from 'next/head'
import Image from 'next/image'
import path from 'path'
import fs from 'fs'

const Home = ({ events }) => {
	console.log(events)

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

					<div className='fabr_wrap'>
						<h3>création du savon Fanny</h3>

						<div className='fabr_desc'>
							<Image
								height={230}
								width={230}
								src='/images/fabrication/bain_mari.jpg'
								alt='Bain marie de karité'
							/>
							<p>
								1- Les beurres de coco et de karité fondent doucement au bain-marie. Température: 35°C - 40°C.
							</p>
						</div>
						<div className='fabr_desc'>
							<Image height={230} width={230} src='/images/fabrication/pesee.jpg' alt='Pesé des huiles' />
							<p>
								2- En attendant, je pèse les huiles essentielles et le macérât de calendula qui sera ajouté en
								surgraissage.
							</p>
						</div>
						<div className='fabr_desc'>
							<Image
								height={230}
								width={230}
								src='/images/fabrication/melange.jpg'
								alt='Ajout de soude dans solution'
							/>
							<p>
								3- J'incorpore la solution de soude préparée en amont avec les huiles et les beurres fondus. Le
								processus de saponification commence.
							</p>
						</div>
						<div className='fabr_desc'>
							<Image height={230} width={230} src='/images/fabrication/mixeur.jpg' alt='Mixage de pâte' />
							<p>4- Méthode ancestrale d'accord, mais avec mixeur.</p>
						</div>
						<div className='fabr_desc'>
							<Image
								height={230}
								width={230}
								src='/images/fabrication/surgraissage.jpg'
								alt="Rajout d'huile dans pate"
							/>
							<p>
								5- La pâte épaissit et forme une trace. C'est le moment d'ajouter les huiles essentielles et le
								macérât.
							</p>
						</div>
						<div className='fabr_desc'>
							<Image height={230} width={230} src='/images/fabrication/petales.jpg' alt='Rajout de pétales' />
							<p>
								6- Après un dernier tour de mixeur j'ajoute quelques pétales <br />
								de calendula pour faire joli !
							</p>
						</div>
						<div className='fabr_desc'>
							<Image
								height={230}
								width={230}
								src='/images/fabrication/coulee.jpg'
								alt='Coulage de pâte dans moule'
							/>
							<p>7- La pâte est coulée dans le grand moule chemisé.</p>
						</div>
						<div className='fabr_desc'>
							<Image
								height={230}
								width={230}
								src='/images/fabrication/deco.jpg'
								alt='Rajout de pétales sur moule'
							/>
							<p>
								8- Quelques pétales de plus ! <br />
								Le moule sera ensuite isolé thermiquement pendant 24 à 48h.
							</p>
						</div>
						<div className='fabr_desc'>
							<Image height={230} width={230} src='/images/fabrication/decoupe.jpg' alt='Decoupe de savon' />
							<p>9- Le pain de savon est démoulé puis coupé en tranches.</p>
						</div>
						<div id='hat' className='fabr_desc'>
							<Image
								height={230}
								width={230}
								src='/images/fabrication/armoire.jpg'
								alt="Savonnière range dans l'armoire"
							/>
							<p>10- Ils sècheront durant 4 à 6 semaines dans l'armoire de cure.</p>
						</div>
					</div>
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
					<div className='savon_wrap'>
						<div className='savon' id='muesli'>
							<div className='inner'>
								<Image src='/images/savons/muesli.jpg' height={128} width={128} alt='Savon Muesli' />
								<div>
									<h3>Müesli</h3>
									<p>
										<span>
											Gourmand et nourrissant, cet exfoliant aux fruits secs au léger parfum d'orange est
											enrichi au beurre de karité hydratant.
										</span>
										<br />
										<span>Surgras 8%</span>
									</p>
								</div>
							</div>
							<div className='compo'>
								Composition: huile d'olive, huile de coco, beurre de karité, huile de tournesol partiellement
								saponifiés, eau, glycérine, amandes, flocons d'avoine, baies de goji, huiles essentielles
								d'orange et de sauge sclarée
							</div>
						</div>
						<div className='savon' id='delice'>
							<div className='inner'>
								<Image src='/images/savons/delice.jpg' height={128} width={128} alt='Savon Délice' />
								<div>
									<h3>Délice</h3>
									<p>
										<span>
											5 huiles végétales, de la glycérine, du cacao, de l'eau et c'est tout ! Délice ne
											contient pas d'huiles essentielles. Hypoallergénique.
										</span>
										<br />
										<span>Surgras 8%</span>
									</p>
								</div>
							</div>
							<div className='compo'>
								Composition: huile d'olive, huile de coco, beurre de karité, huile de tournesol partiellement
								saponifiés, eau, glycérine, beurre de cacao
							</div>
						</div>
						<div className='savon' id='fanny'>
							<div className='inner'>
								<Image src='/images/savons/fanny.jpg' height={128} width={128} alt='Savon Fanny' />
								<div>
									<h3>Fanny</h3>
									<p>
										<span>
											Tout en douceur avec son macérât de calendula apaisant et son discret parfum de
											lavande. Pétales de calendula du jardin.
										</span>
										<br />
										<span>Surgras 8%</span>
									</p>
								</div>
							</div>
							<div className='compo'>
								Composition: huile d'olive, huile de coco, beurre de karité, huile de tournesol partiellement
								saponifiés, eau, glycérine, macérât de calendula, huiles essentielles de lavandin et de litsée
							</div>
						</div>
						<div className='savon' id='thecitron'>
							<div className='inner'>
								<Image src='/images/savons/thecitron.jpg' height={128} width={128} alt='Savon Thé Citron' />
								<div>
									<h3>Thé citron</h3>
									<p>
										<span>
											Le savon shampoing au parfum vitaminé ! Enrichi à l'huile de jojoba et à l'argile
											ghassoul, il nettoie délicatement votre peau et offre vigueur et brillance à vos
											cheveux. Surgras 5%
										</span>
									</p>
								</div>
							</div>
							<div className='compo'>
								Composition: huile d'olive, huile de coco, beurre de karité, huile de ricin partiellement
								saponifiés, eau, glycérine, huile de jojoba, argile ghassoul, huiles essentielles de romarin et
								de litsée
							</div>
						</div>
						<div className='savon romarin' id='theromarin'>
							<div className='inner'>
								<Image src='/images/savons/theromarin.jpg' height={128} width={128} alt='Savon Thé Romarin' />
								<div>
									<h3>Thé romarin</h3>
									<p>
										<span>
											Comme son frère citronné, Thé romarin est enrichi à l'huile de jojoba et à l'argile
											ghassoul. Son parfum vif et frais promet quelques shampoings stimulants ! Surgras
											5%
										</span>
									</p>
								</div>
							</div>
							<div className='compo'>
								Composition: huile d'olive, huile de coco, huile de ricin, beurre de karité partiellement
								saponifiés, eau, glycérine, huile de jojoba, argile ghassoul, huile essentielle de romarin
							</div>
						</div>

						<div className='savon cesar' id='cesar'>
							<div className='inner'>
								<Image src='/images/savons/cesar.jpg' height={128} width={128} alt='Savon César' />
								<div>
									<h3>César - Savon ménager</h3>
									<p>
										Nettoyant et dégraissant toutes surfaces, César est très apprécié pour faire la
										vaisselle, nettoyer la cuisinière et faire briller la robinetterie. Ce savon
										naturellement glycériné est idéal pour faire la lessive à la main et ses qualités
										détachantes préparent efficacement le linge avant son passage dans la machine à laver.
									</p>
								</div>
							</div>
							<div className='compo'>
								Composition: huile d'olive, huile de coco saponifiées, eau, glycérine, ...c'est tout !
							</div>
						</div>

						<div className='info_box'>
							<h3>La lessive liquide: simple, efficace et naturelle</h3>
							<div>
								<p>• 50g de César râpé dans un saladier avec la râpe à fromage</p>
								<p>
									• 1,5L d'eau très chaude (la bouilloire fera le travail) à verser sur les copeaux de César.
									Il est possible d'allonger la lessive de 0,5L supplémentaire sans nuire à son efficacité.
								</p>
								<p>
									• 2 cuillères arasées de Cristaux de soude (carbonate de sodium, vendu au rayon droguerie
									ou lessive) à ajouter au mélange avant qu'il ne refroidisse. On pense à mettre ses gants de
									vaiselle pour manipuler les Cristaux de soude.
								</p>
								<p>
									Anticalcaire et dégraissant, les Cristaux de soude augmenteront le pouvoir nettoyant du
									savon César et participeront à l'entretien de la machine à laver au cours du cycle de
									lavage.
								</p>
								<p>
									Et pour les textiles délicats (laine, soie, etc.), il suffira de réaliser cette lessive
									sans les cristeaux de soude.
								</p>
							</div>
						</div>

						<div className='info_box'>
							<h3>Conseils de savonnière pour une peau apaisée.</h3>
							<div>
								<p>• Ecourtez vos longues, longues, douches trop chaudes.</p>
								<p>
									• Oubliez les vigoureuses et décapantes frictions à la serviette au sortir de la douche et
									préferez les gestes doux, tapotant et tout autant séchant.
								</p>
								<p>
									• Soyez curieux ! Sans tout à fait abandonner votre gel douche (ça viendra), essayez le
									savon surgras saponifié à froid et faites la différence.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div id='ouTrouver' className='categorie'>
					<div></div>
					<h2>Où les trouver ?</h2>
				</div>

				<div className='wrapper'>
					<div className='trouver_wrap'>
						<h3>A la savonnerie</h3>
						<div className='boutique_wrap'>
							<p>
								Directement à la savonnerie. S'assurer de la disponibilité de la savonnière par un appel ou un
								<a href='tel:+33643693967'>SMS</a> un jour ou deux à l'avance. <br />
								Sur commande via l'
								<a href='mailto:savonnerielacurieuse@gmail.com'>adresse email de la savonnerie.</a>
							</p>
						</div>
						<h3>En Boutique</h3>
						<div className='boutique_wrap'>
							<div>
								<h4>Henne Indigo et Compagnie</h4>
								<li>
									<a href='http://www.henneindigoetcompagnie.fr/boutique/' rel='noopener'>
										henneindigoetcompagnie.fr
									</a>
								</li>
								<li className='tag'>Boutique en ligne</li>
							</div>
							<div>
								<h4>Épicerie Proxy Vollore-Ville</h4>
								<li>
									<a href='https://www.facebook.com/epicerieproxivolloreville/' rel='noopener'>
										epicerieproxivolloreville
									</a>
								</li>
								<li>Place de l'Église 63120 Vollore-Ville</li>
							</div>
							<div>
								<h4>Magasin de producteurs Aux Champs</h4>
								<li>
									<a href='https://www.facebook.com/auxchampsthiers/' rel='noopener'>
										auxchampsthiers
									</a>
								</li>
								<li>19 route de Clermont 63300 Thiers</li>
							</div>
							<div>
								<h4>Pharmacie de La Monnerie</h4>
								<li>43 Rue de la Gare 63650 La Monnerie-le-Montel</li>
							</div>
							<div>
								<h4>Le Bio Sens</h4>
								<li>
									<a href='https://www.le-bio-sens.fr/' rel='noopener'>
										le-bio-sens.fr
									</a>
								</li>
								<li>25 rue Fileterie 63600 Ambert</li>

								<li className='tag'>savon ménager César uniquement</li>
							</div>
							<div>
								<h4>L'auvergne en Vrac</h4>
								<li>
									<a href='https://www.facebook.com/lauvergne.envrac' rel='noopener'>
										lauvergne.envrac
									</a>
								</li>
								<li>lauvergne.envrac@gmail.com</li>

								<li className='tag'>savon ménager César uniquement</li>
							</div>
							<div>
								<h4>L'Orange Bleue (Boutique associative & bio-équitable)</h4>
								<li>3 rue de la gravière 63160 Billom</li>
							</div>
						</div>
						<h3>Aux marchés</h3>
						<div className='boutique_wrap'>
							<div>
								<h4>Billom</h4>
								<li>Place de la Halle, un lundi sur deux</li>
								<li>
									<b>Temporairement Place Alfred Thomas</b>
								</li>
							</div>
							<div>
								<h4>Montferrand</h4>
								<li>place de la Fontaine, 1er samedi du mois</li>
								<li>
									<b>De retour le samedi 6 février</b>
								</li>
							</div>
							<div>
								<h4>Olliergues</h4>
								<li>place de la mairie, les dimanches matin, du 1er juillet au 26 août</li>
								<li>
									<b>De retour le 1er février</b>
								</li>
							</div>
						</div>
					</div>
					<div className='wrapper'>
						<h3 id='events'>Evènements 2021</h3>

						<div className='table_wrap'>
							<table>
								<thead>
									<tr>
										<td>Mars</td>
										<td>avril</td>
										<td>mai</td>
										<td>juin</td>
										<td>juillet</td>
										<td>août</td>
										<td>septembre</td>
										<td>octobre</td>
										<td>novembre</td>
										<td>décembre</td>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td></td>
										<td>
											<span>Jeudi</span> 22 <br />
											<span>de 16h30 à 18h30</span> <br />
											<strong>Marché de producteurs</strong>
											<br />
											<small>Sauviat 63414</small>
										</td>
										<td>
											<span>mercredi</span> 12 <br />
											<span>de 16h30 à 19h</span> <br />
											<strong>Marché de Culhat</strong>
											<br />
											<small>Culhat 63350</small>
										</td>
										<td>
											<span>vendredi</span> 11 <br />
											<span>de 16h à 19h</span> <br />
											<strong>Marché de producteurs</strong>
											<br />
											<small>Sermentizon 63418</small>
										</td>
										<td>
											<span>Les dimanches</span>
											<br />
											<span>de 9h à 12h</span> <br />
											<strong>marché de producteurs "Les Terroirs du pays d'Olliergues"</strong>
											<br />
											<small>place de la mairie, Olliergues 63880</small>
										</td>
										<td>
											<span>Les dimanches</span>
											<br />
											<span>de 9h à 12h</span> <br />
											<strong>marché de producteurs "Les Terroirs du pays d'Olliergues"</strong>
											<br />
											<small>place de la mairie, Olliergues 63880</small>
										</td>
										<td></td>
										<td>
											<span>Dimanche</span> 20
											<br />
											<span>de 10h à 18h</span>
											<br />
											<strong>Fête de la Pomme</strong> <br />
											<small>Marsat 63200</small>
										</td>
										<td>
											<strong>Marché de Noël</strong>
											<br />
											<small>Salle des fêtes, rue du Stade, La Monnerie Le Montel 63650</small>
										</td>
										<td>
											<span>vendredi</span> 10
											<br />
											<span>de 17h à 21h</span>
											<br />
											<strong>Marché de Noël</strong>
											<br />
											<small>Orléat 63190</small>
										</td>
									</tr>
									<tr>
										<td></td>
										<td>
											<span>vendredi</span> 23 <br />
											<span>de 16h30 à 18h30</span> <br />
											<strong>Marché de producteurs</strong>
											<br />
											<small>Sermentizon 63418</small>
										</td>
										<td>
											<span>Jeudi</span> 13 <br />
											<span>de 16h à 19h</span> <br />
											<strong>Marché de producteurs</strong>
											<br />
											<small>Sauviat 63414</small>
										</td>
										<td></td>
										<td>
											<strong>Fêtes médiévales au château de la Faye</strong>
											<br />
											<small>Olmet 63880</small>
										</td>
										<td>
											<span> jeudi </span>19
											<br />
											<strong> Festival des insectes</strong>
											<br />
											<small>
												La cité de l'abeille,
												<br />
												Viscontat sur la terre 63250
											</small>
										</td>
										<td></td>
										<td></td>
										<td></td>
										<td>
											<span>samedi</span> 18
											<br />
											<span>
												de 10h à 13h & <br />
												de 16h à 19h
											</span>
											<br />
											<br />
											<span>dimanche</span> 19
											<br />
											<span>de 16h à 19h</span>
											<br />
											<strong>Marché de Noël</strong>
											<br />
											<small>Vollore-Ville 63120</small>
										</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td>
											<span>vendredi</span> 14 & 28 <br />
											<span>de 16h à 19h</span> <br />
											<strong>Marché de producteurs</strong>
											<br />
											<small>Sermentizon 63418</small>
										</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>
											<span>lundi</span> 27
											<br />
											<span>de 14h à 18h</span>
											<br />
											<strong>Marché de Noël</strong>
											<br />
											<small>Augerolles 63930</small>
										</td>
									</tr>
									<tr>
										<td></td>
										<td></td>
										<td>
											<span>samedi</span>
											22
											<br />
											<span>dimanche</span>
											23
											<br />
											<span>de 10h à 19h</span> <br />
											<strong>Ambert Côté Jardin</strong>
											<br />
											<small>Ambert 63600</small>
										</td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td></td>
										<td>
											<span>mardi</span> 28
											<br />
											<span>de 9h à 15h</span>
											<br />
											<strong>Foire de la Saint André</strong>
											<br />
											<small>Vollore-Ville 63120</small>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
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
					<h2 id='faq'>Foire Aux Questions</h2>

					<div className='question'>
						<h3>Vos savons sont-ils bio ?</h3>
						<p>
							<span>
								L'huile d'olive, de ricin, de jojoba, de coco, le beurre de karité, le beurre de cacao ainsi
								que toutes les huiles essentielles sont issus de l'agriculture biologique. L'huile de tournesol
								est produite sous mention Nature &amp; Progrès à Moissat, à moins de 30km de la savonnerie par
								le GAEC Dou Chonlai.
							</span>
							<br />
							<span>Les savons sont emballés dans des sachets de cellophane végétale compostable.</span>
						</p>
					</div>
					<div className='question'>
						<h3>J'ai les cheveux secs, le savon shampooing Thé Citron me convient-il ?</h3>
						<p>
							<span>
								Le savon shampooing Thé Citron convient bien aux cheveux normaux et/ou mixtes. Si vos cheveux
								sont secs, préférez lui le savon Délice enrichi au beurre de cacao nourrissant. De plus, Délice
								est hypoallergénique et convient bien aux jeunes enfants.
							</span>
						</p>
					</div>
					<div className='question'>
						<h3>Curieuse, d'accord, mais cette savonnerie est elle sérieuse ?</h3>
						<p>
							<span>
								La savonnerie La Curieuse est enregistrée en temps qu'établissement cosmétique auprès de l'ANSM
								(Agence Nationale de Sécurité des Médicaments et des produits de santé) et chaque formule de
								savons est validée par un expert cosmétique.
							</span>
						</p>
					</div>
					<div className='question'>
						<h3>Est-ce qu'il y a des ingrédients d'origine animale dans vos savons ?</h3>
						<p>
							<span>
								Non. Les ingrédients utilisés dans la confection des savons La Curieuse sont d'origine végétale
								(huile d'olive, de coco, de tournesol, etc.) et minérale (argile ghassoul).
							</span>
						</p>
					</div>
					<div className='question'>
						<h3>Vous avez du savon au lait d'ânesse ?</h3>
						<p>
							<span>Non.</span>
						</p>
					</div>
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
	const dataFilePath = path.join(process.cwd(), 'events', 'events.json')
	console.log(dataFilePath) // will be YourProject/events/events.json

	const fileContents = fs.readFileSync(dataFilePath, 'utf8')
	const data = JSON.parse(fileContents)

	return {
		props: {
			events: data,
		},
	}
}

export default Home
