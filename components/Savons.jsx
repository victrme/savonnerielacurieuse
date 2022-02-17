import Image from 'next/image'

const Savons = (params) => (
	<div className='wrapper'>
		<div className='savon_wrap'>
			{Object.entries(params.savons).map(([key, { title, desc, surgras, compo }]) => (
				<div key={key} id={key} className='savon'>
					<div className='inner'>
						<Image src={'/images/savons/' + key + '.jpg'} height={1080} width={1080} alt={'Savon' + title} />
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
