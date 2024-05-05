import { db, urls } from "astro:db"

async function addLink ( userId, url ) {
  await db
    .insert(urls)
    .values({
      userId,
      url,
      code: Math.random().toString(36).slice(2)
    })
}

export default addLink
