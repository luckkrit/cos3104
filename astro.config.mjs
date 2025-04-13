// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://luckkrit.github.io',
	base: '/cos3104',
	integrations: [
		starlight({

			title: 'COS3104',
			// social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Tutorials',
					autogenerate: { directory: 'tutorials' },
				},
			],
		}),
	],
});
