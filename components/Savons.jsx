import Image from 'next/image'

const Savons = ({ savons }) => (
	<div className='wrapper'>
		<div className='savon_wrap'>
			{savons.map(({ id, title, desc, surgras, compo, blurDataURL }) => (
				<div key={id} id={id} className='savon'>
					<div className='inner'>
						<Image
							src={`/images/savons/${id}.jpg`}
							height={1080}
							width={1080}
							alt={`Savon ${title}`}
							placeholder='blur'
							blurDataURL={blurDataURL}
						/>
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
	</div>
)

export default Savons
