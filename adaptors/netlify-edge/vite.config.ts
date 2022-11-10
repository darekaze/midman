import {netifyEdgeAdaptor} from '@builder.io/qwik-city/adaptors/netlify-edge/vite'
import {extendConfig} from '@builder.io/qwik-city/vite'
import baseConfig from '../../vite.config'

export default extendConfig(baseConfig, () => {
	return {
		build: {
			rollupOptions: {
				input: ['src/entry.netlify-edge.tsx', '@qwik-city-plan'],
			},
		},
		plugins: [
			netifyEdgeAdaptor({
				staticGenerate: true,
			}),
		],
	}
})
