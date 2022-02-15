async function getEvents() {
	const res = await fetch('../events/events.json')
	return await res.json()
}

export default getEvents
