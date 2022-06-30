import { useEffect, useState } from 'react'

const Nav = () => {
	const [sticky, setSticky] = useState(false)
	const [toggle, setToggle] = useState(false)

	useEffect(() => {
		const getScrollPos = () => {
			if (document) {
				const footerheight = document.querySelector('footer').getBoundingClientRect().height
				const { scrollY, innerHeight } = window

				const isBelowFold = scrollY > innerHeight
				const isAboveFooter = scrollY + innerHeight < document.body.scrollHeight - footerheight

				setSticky(isBelowFold && isAboveFooter)
			}
		}

		window.addEventListener('scroll', getScrollPos)
		return () => window.removeEventListener('scroll', getScrollPos)
	}, [])

	return (
		<header className={(sticky ? 'sticky' : '') + (toggle ? ' toggled' : '')}>
			<nav>
				<ul>
					<li id='menu-logo'>
						<a tabIndex='0' href='#'>
							<span>Savonnerie</span>
							<span>La Curieuse</span>
						</a>

						<button id='menu-hamburger' role='menubutton' onClick={() => setToggle(!toggle)}>
							<div></div>
							<div></div>
							<div></div>
						</button>
					</li>
					<li>
						<a tabIndex='0' href='#saf'>
							La saponification à froid
						</a>
					</li>
					<li>
						<a tabIndex='0' href='#savons'>
							Les savons
						</a>
					</li>
					<li>
						<a tabIndex='0' href='#ouTrouver'>
							Où les trouver
						</a>
					</li>
					<li>
						<a tabIndex='0' href='#contact'>
							Me contacter
						</a>
					</li>
					<li>
						<a tabIndex='0' href='#foire-aux-questions'>
							FAQ
						</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Nav
