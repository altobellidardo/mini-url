import { defineConfig } from 'astro/config';
import auth from "auth-astro";
import node from "@astrojs/node";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [auth(), db()],
  adapter: node({
    mode: "standalone"
  })
});