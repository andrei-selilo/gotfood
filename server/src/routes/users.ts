import * as Router from 'koa-router'
import * as koaBody from 'koa-body'
import { User, UserRole, BankAccount } from '../models'

const router = new Router({ prefix: '/users' })

router
  .get('/', async (ctx, next) => {
    const users: User[] = await User.findAll({
      include: [
        { model: UserRole, as: 'userRole' }
      ]
    })
    ctx.body = users.map(row => row.toJSON())
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
  .put('/:id', async (ctx, next) => {
    const body = ctx.request.body
    await User.update(
      { ...body },
      { where: { id: ctx.params.id } }
    )
    ctx.body = body
  })
  .delete('/:id', async (ctx, next) => {
    const affectedRows: number = await User.destroy({
      where: { id: ctx.params.id }
    })
    ctx.body = { message: `affectedRows: ${affectedRows}` }
  })
  .post('/:id/bankAccount', async (ctx, next) => {
    const body = ctx.request.body
    const bankAccount: BankAccount = await BankAccount.create({
      ...body
    })
    const user: User = await User.findOne({ where: { id: ctx.params.id } })
    const addPrivateInfo: User['privateInfo'] = { regionIds: [...user.privateInfo.bankAccountIds, bankAccount.id] }
    await user.set(
      { privateInfo: { ...user.privateInfo, ...addPrivateInfo } }
    )
    ctx.body = body
  })
  .get('/:id/bankAccount', async (ctx, next) => {
    const bankAccounts: BankAccount[] = await BankAccount.findAll({
      where: { id: ctx.params.bankAccountId }
    })
    ctx.body = bankAccounts.map(row => row.toJSON())
  })
  .get('/:id/bankAccount/:bankAccountId', async (ctx, next) => {
    const bankAccount: BankAccount = await BankAccount.findOne({
      where: { id: ctx.params.bankAccountId }
    })
    ctx.body = bankAccount.toJSON()
  })

export default router