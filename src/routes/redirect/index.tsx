import {component$} from '@builder.io/qwik'
import type {DocumentHead} from '@builder.io/qwik-city'
import {useRedirectMsgHandler} from '~/hooks/useRedirectMsgHandler'
import {useBlockDetector} from '~/hooks/useBlockDetector'

// BETTER: show random gif?

/**
 * Redirector page of the website
 * Do some fancy stuff while redirecting the user to the desire page
 */
export default component$(() => {
	const block = useBlockDetector()
	const handler = useRedirectMsgHandler()

	return (
		<div>
			<h1>
				<span class="lightning">⚡️</span> MidMan Redirector
			</h1>
			<p>Welp, It's still quite empty here, but we will add more things here later 😉</p>

			{block.present && <p>** What a Shame. Disable your AdBlock la :/ **</p>}

			{/* LATER: you can put anything you want here */}

			{handler.redirectLink ? (
				<a class="mindblow" href={handler.redirectLink} rel="nofollow noopener noreferrer">
					Go to link bruh
				</a>
			) : (
				<div>Generating Link...</div>
			)}
		</div>
	)
})

export const head: DocumentHead = {
	title: 'Redirector',
}
