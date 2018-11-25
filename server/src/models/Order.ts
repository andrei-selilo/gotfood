import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Default, Is } from 'sequelize-typescript'
import { User, Region } from '../models'
import * as uuid from 'uuid/v4'

export enum OrderStatus {
  ORDERED = 'ordered',
  ORDER_CONFIRMED = 'order_confirmed',
  ORDER_PREPARE = 'order_prepare',
  ORDER_PREPARE_FAILED = 'order_prepare_failed',
  ORDER_PREPARED = 'order_prepared',
  DELIVERY_SENT = 'delivery_sent',
  DELIVERY_FAILED = 'delivery_failed',
  DELIVERY_DONE = 'delivery_done',
  DELIVERY_CONFIRMED = 'delivery_confirmed',
  ORDER_PAID = 'order_paid',
  FULFILLED = 'fulfilled'
}

@Table({
  tableName: 'userRegion',
  modelName: 'UserRegion'
})
export class Order extends Model<Order> {

  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @ForeignKey(() => User)
  @Column(DataType.UUIDV4)
  public clientId: string

  @ForeignKey(() => User)
  @Column(DataType.UUIDV4)
  public sellerId: string

  public itemIds: string[]

  public amount: number

  @ForeignKey(() => User)
  @Column(DataType.UUIDV4)
  public courierId: string

  public deliveryStart: Date

  public deliveryEnd: Date

  @Is('OrderStatusValidator', (type: OrderStatus): never | void => {
    const exist: boolean = Object.keys(OrderStatus)
      .some((key: string) => OrderStatus[key] === type)
    if (!exist) {
      throw new Error('You are trying to set a wrong type.')
    }
  })
  @Column({
    type: DataType.ENUM(
      OrderStatus.ORDERED,
      OrderStatus.ORDER_CONFIRMED,
      OrderStatus.ORDER_PREPARE,
      OrderStatus.ORDER_PREPARE_FAILED,
      OrderStatus.ORDER_PREPARED,
      OrderStatus.DELIVERY_SENT,
      OrderStatus.DELIVERY_FAILED,
      OrderStatus.DELIVERY_DONE,
      OrderStatus.DELIVERY_CONFIRMED,
      OrderStatus.ORDER_PAID,
      OrderStatus.FULFILLED
    )
  })
  public status: string

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

}