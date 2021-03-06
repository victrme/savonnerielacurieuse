import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const TableCell = ({ nom, date, horaire, adresse, note }) => {
	return nom ? (
		<>
			<p>{date}</p>
			{horaire && <p>{horaire}</p>}

			<p className='nom'>
				<strong>{nom}</strong>
			</p>

			<p>
				<small>{adresse}</small>
			</p>

			{note && (
				<p>
					<small>{note}</small>
				</p>
			)}
		</>
	) : (
		''
	)
}

const TableBody = ({ annee, liste }) => {
	return (
		<>
			<h3 id='events'>{'Evènements ' + annee}</h3>

			<div className='table_wrap'>
				<table>
					<thead>
						<tr>
							<td scope='col'>mars</td>
							<td scope='col'>avril</td>
							<td scope='col'>mai</td>
							<td scope='col'>juin</td>
							<td scope='col'>juillet</td>
							<td scope='col'>août</td>
							<td scope='col'>septembre</td>
							<td scope='col'>octobre</td>
							<td scope='col'>novembre</td>
							<td scope='col'>décembre</td>
						</tr>
					</thead>
					<tbody>
						{liste.map((row, i) => (
							<tr key={i}>
								{row.map((info, i) => (
									<td key={i}>
										<TableCell {...info} />
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

const Events = () => {
	const { data, error } = useSWR('events.json', fetcher)

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

const Bloc = ({ id, titre, children }) => {
	return (
		<>
			<h3 id={id}>{titre}</h3>
			<div className='boutique_wrap'>{children}</div>
		</>
	)
}

const Marches = () => {
	const { data, error } = useSWR('marches.json', fetcher)

	return error || !data ? (
		<div>
			<h4>-------</h4>
			<li>-------, -----------</li>
		</div>
	) : (
		<>
			{data.map(({ nom, adresse, activite, note }) => (
				<div key={nom}>
					<h4>{nom}</h4>
					<li>
						{adresse}, {activite}
					</li>
					{note ? <li className='note'>{note}</li> : ''}
				</div>
			))}
		</>
	)
}

const Boutiques = () => {
	const { data, error } = useSWR('boutiques.json', fetcher)

	return error || !data ? (
		<div>
			<h4>------</h4>
			<li>
				<p>---------</p>
				<p>---------------</p>
			</li>
		</div>
	) : (
		<>
			{data.map(({ nom, web, adresse, note }) => (
				<div key={nom}>
					<h4>{nom}</h4>

					{note && <li className='tag'>{note}</li>}

					{web && (
						<li>
							<a href={web[0]} rel='noopener'>
								{web[1]}
							</a>
						</li>
					)}

					<li>
						<p>{adresse[0]}</p>
						<p>{adresse[1]}</p>
					</li>
				</div>
			))}
		</>
	)
}

const Disponible = () => {
	return (
		<div className='trouver_wrap'>
			<Bloc id='savonnerie' titre='A la savonnerie'>
				<ul id='alasavonnerie'>
					<li>
						Directement à la savonnerie. S&apos;assurer de la disponibilité de la savonnière par un appel ou un SMS
						un jour ou deux à l&apos;avance.
					</li>
					<li>Sur commande via l&apos;adresse mail de la savonnerie.</li>
				</ul>
			</Bloc>

			<Bloc id='boutiques' titre='En Boutique'>
				<Boutiques />
			</Bloc>

			<Bloc id='marches' titre='Aux marchés'>
				<Marches />
			</Bloc>

			<Events />
		</div>
	)
}

export default Disponible
