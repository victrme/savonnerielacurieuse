const Table = (params) => {
	let row = []
	const fullTable = []
	const maxRows = Math.max(...Object.values(params.events).map((a) => a.length))

	for (let i = 0; i < maxRows; i++) {
		Object.values(params.events).forEach((elem) => row.push(elem[i] ? elem[i] : {}))
		fullTable.push(row)
		row = []
	}

	return (
		<div className='wrapper'>
			<h3 id='events'>Evènements 2021</h3>

			<div className='table_wrap'>
				<table>
					<thead>
						<tr>
							<td>Mars</td>
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
						{fullTable.map((row, i) => (
							<tr key={i}>
								{row.map(({ nom, date, horaire, adresse, note }) => (
									<td key={nom}>
										<span>{date}</span> <br />
										<span>{horaire}</span> <br />
										<strong>{nom}</strong>
										<br />
										<small>{adresse}</small>
										<br />
										{note ? <small>{note}</small> : ''}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table
