import * as Router from 'koa-router'
import * as koaBody from 'koa-body'

const router = new Router({ prefix: '/' })

router.get('/', koaBody(), async (ctx) => {
  ctx.body = { A: `root` }
})

export default router