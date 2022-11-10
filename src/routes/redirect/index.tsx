import {component$, $, useOnWindow, useStore} from '@builder.io/qwik'
import type {DocumentHead} from '@builder.io/qwik-city'

/**
 * Redirector page of the website
 * Do some fancy stuff while redirecting the user to the desire page
 */
export default component$(() => {
	const store = useStore({redirectLink: ''})

	useOnWindow(
		'message',
		$((event) => {
			try {
				const origin = (event as MessageEvent).origin
				const referer = new URL(document.referrer)

				if (origin !== referer.origin) return

				const link = new URL((event as MessageEvent).data)
				store.redirectLink = link.href
			} catch {
				console.warn('Invalid link:', (event as MessageEvent).data)
			}
		}),
	)

	return (
		<div>
			<h1>
				<span class="lightning">⚡️</span> MidMan Redirector
			</h1>

			<p>Welp, It's still quite empty here, but we will add more things here later 😉</p>

			{/* LATER: you can put anything you want here */}

			{store.redirectLink ? (
				<a
					class="mindblow"
					href={store.redirectLink}
					target="_blank"
					rel="nofollow noopener noreferrer">
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
