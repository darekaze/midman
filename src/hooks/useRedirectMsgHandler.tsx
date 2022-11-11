import {useStore, useOnWindow, $} from '@builder.io/qwik'
import {decode, isValid} from 'js-base64'

export type RedirectState = {
	redirectLink: string
}

export const useRedirectMsgHandler = () => {
	const store = useStore<RedirectState>({
		redirectLink: '',
	})

	useOnWindow(
		'message',
		$((event) => {
			// This will make sure we only handle the link once
			if (store.redirectLink) return

			try {
				// Check origin and referrer present
				const origin = (event as MessageEvent).origin
				const referer = new URL(document.referrer)

				if (origin !== referer.origin) return

				// Parse data
				let data: string = (event as MessageEvent).data
				isValid(data) && (data = decode(data))

				store.redirectLink = new URL(data).href
			} catch {
				console.warn('Invalid data:', (event as MessageEvent).data)
			}
		}),
	)

	return store
}
