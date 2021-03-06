import Script from 'next/script'
import { useState } from 'react'

const Contact = () => {
	const [acceptsMap, setAcceptsMap] = useState(false)

	const initMap = () => {
		const pos = { lat: 45.785589, lng: 3.599444 }

		new google.maps.Marker({
			position: pos,
			map: new google.maps.Map(document.getElementById('map'), {
				center: pos,
				zoom: 18,
				tilt: 45,
			}),
		})
	}

	return (
		<>
			<div className='adresse'>
				<div id='map'>
					{!acceptsMap && (
						<div id='map-activate' onClick={() => setAcceptsMap(true)} role='button'>
							<button>Voir sur Maps</button>
						</div>
					)}
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

			{acceptsMap && (
				<Script
					src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCSVG3QHrJIBNNuteK_9SmJvi27KGhkhQw&libraries=&v=weekly'
					strategy='lazyOnload'
					onLoad={() => initMap()}
				/>
			)}
		</>
	)
}

export default Contact
