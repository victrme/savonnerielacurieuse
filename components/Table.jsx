import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const TableBody = ({ annee, liste }) => {
	return (
		<>
			<h3 id='events'>{'Evènements ' + annee}</h3>

			<div className='table_wrap'>
				<table>
					<thead>
						<tr>
							<td>mars</td>
							<td>avril</td>
							<td>mai</td>
							<td>juin</td>
							<td>juillet</td>
							<td>août</td>
							<td>septembre</td>
							<td>octobre</td>
							<td>novembre</td>
							<td>décembre</td>
						</tr>
					</thead>
					<tbody>
						{liste.map((row, i) => (
							<tr key={i}>
								{row.map(({ nom, date, horaire, adresse, note }, i) => (
									<td key={i}>
										<p>{date}</p>
										{horaire ? <p>{horaire}</p> : ''}
										<p className='nom'>
											<strong>{nom}</strong>
										</p>
										<p>
											<small>{adresse}</small>
										</p>
										{note ? (
											<p>
												<small>{note}</small>
											</p>
										) : (
											''
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</>
	)
}

const Table = () => {
	const { data, error } = useSWR('/events.json', fetcher)

	//
	// Events liste les mois en ligne selon le mois avec le plus d'events
	// juillet => 3 events => 3 lignes
	// [[mars ... decembre], [mars ... decembre], [mars ... decembre]]
	//

	if (error || !data) {
		return <TableBody liste={Array(3).fill(Array(10).fill({}))}></TableBody>
	}

	if (data) {
		const maxRows = Math.max(...Object.values(data.mois).map((a) => a.length))
		const fullTable = []
		let row = []

		for (let i = 0; i < maxRows; i++) {
			Object.values(data.mois).forEach((elem) => row.push(elem[i] ? elem[i] : {}))
			fullTable.push(row)
			row = []
		}

		return <TableBody annee={data.annee} liste={fullTable}></TableBody>
	}
}

export default Table
