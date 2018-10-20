import * as Router from 'koa-router'
import * as koaBody from 'koa-body'

const router = new Router({ prefix: '/cart' })

router
  .get('/', koaBody(), async (ctx) => {
    ctx.body = { A: `/cart` }
  })
  .get('/:id', koaBody(), async (ctx) => {
    ctx.body = { A: `/cart` }
  })
  .put('/:id', koaBody(), async (ctx) => {
    ctx.body = { A: `/cart` }
  })

export default router