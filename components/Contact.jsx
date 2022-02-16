import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { useRef, useState, useEffect, Children, isValidElement, cloneElement } from 'react'

function Map({ center, zoom, style, children }) {
	const ref = useRef()
	const [map, setMap] = useState()

	useEffect(() => {
		if (ref.current && !map) {
			new window.google.maps.Map(ref.current, {
				center,
				zoom,
				style,
			})
		}
	}, [ref, map])

	return (
		<>
			<div ref={ref} style={style} />
			{Children.map(children, (child) => {
				if (isValidElement(child)) {
					// set the map prop on the child component
					return cloneElement(child, { map })
				}
			})}
		</>
	)
}

const render = (status) => {
	switch (status) {
		case Status.LOADING:
			return <h1>ca charge</h1>
		case Status.FAILURE:
			return <h1>c cassé</h1>
		case Status.SUCCESS:
			return <Map />
	}
}

const Marker = (options) => {
	const [marker, setMarker] = useState()

	useEffect(() => {
		if (!marker) {
			setMarker(new google.maps.Marker())
		}

		// remove marker from map on unmount
		return () => {
			if (marker) {
				marker.setMap(null)
			}
		}
	}, [marker])

	useEffect(() => {
		if (marker) {
			marker.setOptions(options)
		}
	}, [marker, options])

	return null
}

const Contact = () => {
	const center = { lat: 45.785589, lng: 3.599444 }
	const zoom = 13

	return (
		<div className='adresse'>
			<Wrapper apiKey={'AIzaSyCSVG3QHrJIBNNuteK_9SmJvi27KGhkhQw'} render={render}>
				<Map center={center} zoom={zoom} style={{ width: 400, height: 400 }}>
					<Marker position={center}></Marker>
				</Map>
			</Wrapper>

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
	)
}

export default Contact
