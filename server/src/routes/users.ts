import * as Router from 'koa-router'
import * as koaBody from 'koa-body'
import { User } from '../models'

const router = new Router({ prefix: '/users' })

router
  .get('/', async (ctx, next) => {
    const users: User[] = await User.findAll()
    ctx.body = users.map(user => user.toJSON())
  })
  .post('/', async (ctx, next) => {
    const body = ctx.request.body
    await User.create({
      ...body
    })

    ctx.body = body
  })
  .get('/:id', async (ctx, next) => {
    const user: User = await User.findOne({
      where: { id: ctx.params.id }
    })
    ctx.body = user.toJSON()
  })

export default router