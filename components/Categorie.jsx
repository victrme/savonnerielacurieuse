import Image from 'next/image'

const Categorie = ({ id, title, placeholder }) => {
	return (
		<div id={id} className='categorie' style={{ position: 'relative' }}>
			<div className='image'>
				<Image
					src={`/images/categorie/${id}.jpg`}
					layout='fill'
					objectFit='cover'
					alt={title}
					placeholder='blur'
					blurDataURL={placeholder}
				/>
			</div>
			<h2>{title}</h2>
		</div>
	)
}

export default Categorie
