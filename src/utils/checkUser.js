import { getSession } from 'auth-astro/server';
import { db, eq, users } from "astro:db"

async function checkUser ( req ) {
  const session = await getSession(req)

  if (!session || !session.user.email || !session.user.name) return

  const res = await db.select().from(users).where(eq(users.email, session.user.email))
  
  if (res.length === 0) {
    await db.insert(users).values({
      email: session.user.email,
      name: session.user.name
    })
  }

  return session
}

export default checkUser