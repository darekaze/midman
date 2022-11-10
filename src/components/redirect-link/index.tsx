import {component$, $} from '@builder.io/qwik'

type Props = {
	link: string
	redirectLink: string
	isSameOrigin?: boolean
	text?: string
}

/**
 * Redirect Link for open a popup and redirect
 */
export const RedirectLink = component$<Props>(
	({link, redirectLink, text = 'Open Link', isSameOrigin = false}) => {
		const onClick = $(() => {
			const target = isSameOrigin ? window.location.origin + link : link
			const x = window.open(target)

			// Delay is needed to send message
			setTimeout(() => {
				x?.postMessage(redirectLink, target)
			}, 2000)
		})

		return (
			<a href={link} preventdefault:click onClick$={onClick}>
				{text}
			</a>
		)
	},
)
