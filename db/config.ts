import { column, defineDb, defineTable } from 'astro:db';

const UserTable = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    email: column.text(),
    name: column.text()
  }
})

const UrlTable = defineTable({
  columns: {
    userId: column.number({ references: () => UserTable.columns.id }),
    url: column.text(),
    code: column.text()
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: {
    users: UserTable,
    urls: UrlTable
  }
});
