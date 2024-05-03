import { defineConfig } from 'astro/config';
import auth from "auth-astro";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [auth()],
  adapter: node({
    mode: "standalone"
  })
});