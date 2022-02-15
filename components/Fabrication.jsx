import Image from 'next/image'

const Fabrication = (params) => (
	<div className='fabr_wrap'>
		<h3>création du savon Fanny</h3>

		{params.fabrication.map(({ src, alt, step }, i) => (
			<div key={src} className='fabr_desc'>
				<Image height={230} width={230} src={'/images/fabrication/' + src + '.jpg'} alt={alt} />
				<p>{i + 1 + '- ' + step}</p>
			</div>
		))}
	</div>
)

export default Fabrication
