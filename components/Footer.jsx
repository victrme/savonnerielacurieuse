const Footer = ({ savons }) => {
	return (
		<footer>
			<div className='index'>
				<h3>
					<a href='#saf'>La saponification à froid</a>
				</h3>

				<ul>
					<li>
						<a href='#creation-de-savon'>Création du savon Fanny</a>
					</li>
					<li>
						<a href='#saponification-surgras'>Le processus</a>
					</li>
				</ul>

				<h3>
					<a href='#savons'>Les savons</a>
				</h3>
				<ul>
					{savons.map((item) => (
						<li key={item.id}>
							<a href={'#' + item.id}>{item.title}</a>
						</li>
					))}
				</ul>

				<h3>
					<a href='#ouTrouver'>Où les trouver</a>
				</h3>

				<ul>
					<li>
						<a href='#savonnerie'>A la savonnerie</a>
					</li>

					<li>
						<a href='#boutiques'>En boutique</a>
					</li>

					<li>
						<a href='#marches'>Aux marchés</a>
					</li>

					<li>
						<a href='#events'>Aux évènements</a>
					</li>
				</ul>

				<h3>
					<a href='#contact'>Me contacter</a>
				</h3>

				<h3>
					<a href='#foire-aux-questions'>Foire aux Questions</a>
				</h3>
			</div>

			<div className='logo'>
				<h2>
					<p>Savonnerie</p>
					<p>La Curieuse</p>
				</h2>
				<p>
					<small>depuis 2016</small>
				</p>
			</div>
		</footer>
	)
}

export default Footer
