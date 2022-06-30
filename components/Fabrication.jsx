import Image from 'next/image'

const Fabrication = ({ fabrication }) => {
	return (
		<>
			<div className='fabr_intro'>
				<p className='fat'>
					Cette méthode de fabrication artisanale garantit la présence de glycérine dans le savon et permet de
					conserver une grande partie des propriétés bienfaisantes des huiles, beurres et huiles essentielles
					utilisés. <br />
					C&apos;est une méthode écologique dont le procédé de fabrication est sobre en énergie.
				</p>
			</div>

			<h3 id='creation-de-savon'>création du savon Fanny</h3>
			<ol className='fabr_wrap'>
				{fabrication.map(({ id, alt, step, blurDataURL }, i) => (
					<li key={alt} className='fabr_desc'>
						<Image
							src={`/images/fabrication/${id}.jpg`}
							height={230}
							width={230}
							alt={alt}
							placeholder='blur'
							blurDataURL={blurDataURL}
						/>
						<p>{i + 1 + '- ' + step}</p>
					</li>
				))}
			</ol>

			<div className='info_wrap'>
				<div id='saponification-surgras' className='info_box'>
					<h3>La saponification</h3>
					<p>
						<span>
							La saponification est la réaction chimique qui transforme le mélange huile + soude en savon +
							glycérine.
						</span>
						<br />
						<br />
						<span>Il ne reste aucune trace de soude dans un savon &ldquo;fini&ldquo;.</span>
					</p>
				</div>
				<div className='info_box'>
					<h3>Le surgras</h3>
					<p>
						<span>
							En cours de fabrication, j&apos;enrichis mes savons d&apos;huiles aux vertus apaisantes,
							régénérantes, et nourrissantes. Ces huiles, ajoutées aux corps gras déjà saponifiés viennent
							sur-graisser le savon.
						</span>
						<br />
						<span>
							Un savon surgras est un savon qui ne se contente pas de laver, il permet aussi au film
							hydrolipidique de la peau de se restaurer plus rapidement.
						</span>
					</p>
				</div>
			</div>
		</>
	)
}

export default Fabrication
