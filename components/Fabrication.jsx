import Image from 'next/image'

const Fabrication = (params) => {
	params.blurs.forEach((blur, i) => {
		params.fabrication[i].blur = blur
	})

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

			<div className='fabr_wrap'>
				<h3>création du savon Fanny</h3>

				{params.fabrication.map(({ src, alt, step, blur }, i) => (
					<div key={src} className='fabr_desc'>
						<Image
							height={230}
							width={230}
							alt={alt}
							placeholder='blur'
							blurDataURL={blur}
							src={'/images/fabrication/' + src + '.jpg'}
						/>
						<p>{i + 1 + '- ' + step}</p>
					</div>
				))}
			</div>

			<div className='info_wrap'>
				<div className='info_box'>
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
