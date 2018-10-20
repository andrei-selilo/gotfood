import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Default } from 'sequelize-typescript'
import { User } from '../models'
import * as uuid from 'uuid/v4'

export enum ItemType {
  BREAKFAST = 'breakfast',
  LUNCH = 'lunch',
  DINNER = 'dinner',
  SUPPER = 'supper',
  SNACK = 'snack',
  JUNKFOOD = 'junkfood',
  HEALTHY = 'healthy'
}
@Table({
  tableName: 'items',
  modelName: 'Item'
})
export class Item extends Model<Item> {

  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @ForeignKey(() => User)
  @Column(DataType.UUIDV4)
  public userId: string

  @Column(DataType.STRING(64))
  public name: string

  @Column(DataType.ARRAY(DataType.ENUM(
    ItemType.BREAKFAST,
    ItemType.LUNCH,
    ItemType.DINNER,
    ItemType.SUPPER,
    ItemType.SNACK,
    ItemType.JUNKFOOD,
    ItemType.HEALTHY,
  )))
  public type: string

  @Column(DataType.STRING(500))
  public description: string

  @Column(DataType.INTEGER)
  public points: number

  @Column(DataType.INTEGER)
  public price: number

  @Column(DataType.JSONB)
  public info: {
    phones: string[],
    addresses: string[],
  }

  @Column(DataType.BOOLEAN)
  public active: boolean

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

  @BelongsTo(() => User)
  public user: User

}