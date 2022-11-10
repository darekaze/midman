import {component$, useStylesScoped$} from '@builder.io/qwik'
import {Link} from '@builder.io/qwik-city'
import {MainLogo} from '../icons/main'
import styles from './header.css?inline'

export default component$(() => {
	useStylesScoped$(styles)

	return (
		<header>
			<div class="logo">
				<Link href="/">
					<MainLogo />
				</Link>
			</div>
		</header>
	)
})
