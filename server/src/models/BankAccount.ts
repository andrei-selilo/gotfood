import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, ForeignKey, Default } from 'sequelize-typescript'
import { User } from '../models'
import * as uuid from 'uuid/v4'

@Table({
  tableName: 'bankAccounts',
  modelName: 'BankAccount'
})
export class BankAccount extends Model<BankAccount> {

  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @ForeignKey(() => User)
  @Column(DataType.UUIDV4)
  public userId: string

  @Column(DataType.STRING(64))
  public type: string

  @Column(DataType.STRING(64))
  public name: string

  @Column(DataType.STRING(64))
  public currency: string

  @Column(DataType.JSONB)
  public data: {
    publicKey: string,
    secretKey: string,
  }

  @Column(DataType.BOOLEAN)
  public active: boolean

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

}