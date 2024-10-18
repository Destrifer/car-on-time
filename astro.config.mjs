import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon()],
	vite: {
		resolve: {
			alias: {
				'@components': path.resolve('./src/components'),
			},
		},
	},
});

import { defineConfig } from 'astro/config';
import path from 'path';
