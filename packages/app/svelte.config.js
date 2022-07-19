import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			optimizeDeps: {
				include: [
					'lodash',
					'lodash/merge',
					'lodash/isEmpty',
					'lodash/includes',
					'lodash/kebabCase',
					'xstate/lib/actions',
					'lodash/pickBy',
					'lodash/get',
					'style-dictionary/lib/utils/deepExtend',
					'style-dictionary/lib/utils/flattenProperties',
					'style-dictionary/lib/utils/references/usesReference'
				]
			},
			plugins: [],
			ssr: {
				noExternal:
					process.env.NODE_ENV !== 'development' ? ['lodash', 'xstate', 'style-dictionary'] : []
			},
			resolve: {
				alias: {
					'./runtimeConfig': './runtimeConfig.browser'
				}
			}
		}
	}
};

export default config;
