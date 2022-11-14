import {component$, $} from '@builder.io/qwik'
import {encode} from 'js-base64'
import {setCountInterval} from '~/utils/interval'

type Props = {
	link: string
	redirectLink: string
	isSameOrigin?: boolean
	text?: string
	encodeBase64?: boolean
}

/**
 * Redirect Link for open a popup and redirect
 * Base64 encoding is also support
 */
export const RedirectLink = component$<Props>(
	({link, redirectLink, text = 'Open Link', encodeBase64 = true, isSameOrigin = false}) => {
		const onClick = $(() => {
			const data = encodeBase64 ? encode(redirectLink) : redirectLink
			const target = isSameOrigin ? window.location.origin + link : link
			const x = window.open(target)

			// Delay is needed to send message
			setCountInterval(
				() => {
					x?.postMessage(data, target)
				},
				2000,
				3,
			)
		})

		return (
			<a href={link} preventdefault:click onClick$={onClick}>
				{text}
			</a>
		)
	},
)
