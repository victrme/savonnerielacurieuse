import Image from 'next/image'

const Categorie = ({ id, title, placeholder, alt }) => {
	return (
		<div id={id} className='categorie' style={{ position: 'relative' }}>
			<div className='image'>
				<Image
					src={`/images/categorie/${id}.webp`}
					layout='fill'
					objectFit='cover'
					alt={alt}
					placeholder='blur'
					blurDataURL={placeholder}
				/>
			</div>
			<h2>{title}</h2>
		</div>
	)
}

export default Categorie
