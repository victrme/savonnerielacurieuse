import { useEffect, useState } from 'react'

const Nav = () => {
	const [sticky, setSticky] = useState(false)

	useEffect(() => {
		const getScrollPos = (e) => {
			if (document) {
				const footerheight = document.querySelector('footer').getBoundingClientRect().height

				const isBelowFold = e.view.scrollY > window.innerHeight
				const isAboveFooter = e.view.scrollY + window.innerHeight < document.body.scrollHeight - footerheight

				setSticky(isBelowFold && isAboveFooter)
			}
		}

		window.addEventListener('scroll', getScrollPos)
		return () => window.removeEventListener('scroll', getScrollPos)
	}, [])

	return (
		<header className={sticky ? 'sticky' : ''}>
			<nav>
				<a role='menuitem' tabIndex='0' href='#' id='menu-logo'>
					<span>Savonnerie</span>
					<span>La Curieuse</span>
				</a>

				<a role='menuitem' tabIndex='0' href='#saf'>
					La saponification à froid
				</a>
				<a role='menuitem' tabIndex='0' href='#savons'>
					Les savons
				</a>
				<a role='menuitem' tabIndex='0' href='#ouTrouver'>
					Où les trouver
				</a>
				<a role='menuitem' tabIndex='0' href='#contact'>
					Me contacter
				</a>
				<a role='menuitem' tabIndex='0' href='#foire-aux-questions'>
					FAQ
				</a>
			</nav>
		</header>
	)
}

export default Nav
