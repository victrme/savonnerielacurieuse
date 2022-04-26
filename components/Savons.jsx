import Image from 'next/image'

const Savons = ({ savons }) => (
	<>
		<div className='savon_wrap'>
			{savons.map(({ id, title, desc, surgras, compo, blurDataURL }) => (
				<div key={id} id={id} className='savon'>
					<div className='inner'>
						<div className='image'>
							<Image
								src={`/images/savons/${id}.jpg`}
								alt={`Savon ${title}`}
								placeholder='blur'
								layout='fill'
								objectFit='cover'
								blurDataURL={blurDataURL}
							/>
						</div>
						<div>
							<h3>{title}</h3>
							<p>{desc}</p>
							<p>{surgras}</p>
						</div>
					</div>
					<div className='compo'>{compo}</div>
				</div>
			))}
		</div>

		<div className='info_wrap'>
			<div className='info_box lessive'>
				<div className='info-titre'>
					<h3>éco-lessive simple et efficace</h3>
					<h4>Je divise mon budget lessive par trois !</h4>
				</div>
				<ul>
					<li>
						râper 50g de <b>savon ménager César</b> dans un saladier
					</li>
					<li>
						ajouter 2 cuillères à café (15g) de <b>cristaux de soude ménagère</b> (carbonate de sodium)
					</li>
					<li>verser 1L d’eau très chaude sur le mélange</li>
					<li>laisser fondre</li>
					<li>ajouter de l&apos;eau froide jusqu&apos;à obtenir 2L de lessive. C&apos;est prêt !</li>
				</ul>
				<p>Pour des textiles délicats, il suffit de réaliser cette lessive sans les cristaux de soude.</p>
			</div>
		</div>
	</>
)

export default Savons
