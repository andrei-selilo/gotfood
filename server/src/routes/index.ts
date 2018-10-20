import * as combineRouters from 'koa-combine-routers'
import rootRouter from './root'
import usersRouter from './users'
import cartRouter from './cart'

const router = combineRouters(
  rootRouter,
  usersRouter,
  cartRouter
)

export default router
