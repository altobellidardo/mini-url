import { db, eq, urls } from "astro:db"

async function getLink ( code ) {
  const res = await db
    .select()
    .from(urls)
    .where(eq(urls.code, code))

  return res[0].url
}

export default getLink
