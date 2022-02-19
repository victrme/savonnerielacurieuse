import Image from 'next/image'

const Savons = ({ savons }) => (
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
)

export default Savons
