import {useClientEffect$, useStore} from '@builder.io/qwik'

export type BlockState = {
	present: boolean
}

export const useBlockDetector = () => {
	const store = useStore<BlockState>({present: false})

	useClientEffect$(() => {
		store.present = !document.getElementById('2Bm57pfs9o3P')
	})

	return store
}
