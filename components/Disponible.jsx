const Disponible = (params) => {
	const { boutiques, marches } = params.disponible

	return (
		<div className='trouver_wrap'>
			<h3>A la savonnerie</h3>

			<div className='boutique_wrap'>
				<p>
					Directement à la savonnerie. S'assurer de la disponibilité de la savonnière par un appel ou un
					<a href='tel:+33643693967'>SMS</a> un jour ou deux à l'avance. <br />
					Sur commande via l'
					<a href='mailto:savonnerielacurieuse@gmail.com'>adresse email de la savonnerie.</a>
				</p>
			</div>

			<h3>En Boutique</h3>

			<div className='boutique_wrap'>
				{boutiques.map(({ nom, web, adresse, plus }) => (
					<div key={nom}>
						<h4>{nom}</h4>
						{web ? (
							<li>
								<a href={web[0]} rel='noopener'>
									{web[1]}
								</a>
							</li>
						) : (
							''
						)}
						<li>
							<p>{adresse[0]}</p>
							<p>{adresse[1]}</p>
						</li>
						{plus ? <li className='tag'>{plus}</li> : ''}
					</div>
				))}
			</div>

			<h3>Aux marchés</h3>

			<div className='boutique_wrap'>
				{marches.map(({ nom, adresse, activite, note }) => (
					<div key={nom}>
						<h4>{nom}</h4>
						<li>
							{adresse}, {activite}
						</li>
						{note ? <li className='note'>{note}</li> : ''}
					</div>
				))}
			</div>
		</div>
	)
}

export default Disponible
