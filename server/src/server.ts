import * as Koa from 'koa'
import * as koaBody from 'koa-body'

console.log(process.env.DATABASE_URL)

import { DB } from './lib/db'

import router from './routes'

const port = 3000
const app = new Koa()
const db = DB.Instance

app.use(koaBody({
  formidable: { uploadDir: './uploads' },
  multipart: true,
  urlencoded: true
}))

app.use(async (ctx, next) => {
  // Log the request to the console
  console.log('Url:', ctx.url, ctx.method)

  // Pass the request to the next middleware function
  await next()
});

app.use(router())
app.listen(port)

console.log(`Server running on port ${port}`)