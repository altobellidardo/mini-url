import { db, eq, urls } from "astro:db"

async function getLinks ( userId ) {
  const res = await db
    .select()
    .from(urls)
    .where(eq(urls.userId, userId))

  return res
}

export default getLinks