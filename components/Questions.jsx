const Questions = ({ faq }) => (
	<>
		<h2 id='foire-aux-questions'>Foire Aux Questions</h2>

		{faq.map(({ question, reponse }) => (
			<div key={question} className='question'>
				<h3>{question}</h3>
				<p>{reponse}</p>
			</div>
		))}
	</>
)

export default Questions
