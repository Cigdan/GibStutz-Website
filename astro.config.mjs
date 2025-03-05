// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), alpinejs()]
});