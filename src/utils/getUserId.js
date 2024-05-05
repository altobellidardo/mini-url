import { db, users, eq } from "astro:db"

async function getUserId ( email ) {
  const res = await db
    .select()
    .from(users)
    .where(eq(users.email, email))

  return res[0].id
}

export default getUserId
