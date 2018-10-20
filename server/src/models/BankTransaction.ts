import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Default } from 'sequelize-typescript'
import { UserRole, BankAccount } from '../models'
import * as uuid from 'uuid/v4'

export enum BankTransactionType {

}

export enum BankTransactionStatus {
  CREATED = 'admin',
  SENT = 'user',
  CANCELLED = 'cancelled',
  RETURNED = 'returned',
  LOCKED = 'locked',
  COMPLETE = 'complete',
}

@Table({
  tableName: 'bankTransactions',
  modelName: 'BankTransaction'
})
export class BankTransaction extends Model<BankTransaction> {

  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @Column(DataType.STRING(64))
  public type: string

  @Column(DataType.ENUM(
    BankTransactionStatus.CREATED,
    BankTransactionStatus.SENT,
    BankTransactionStatus.CANCELLED,
    BankTransactionStatus.RETURNED,
    BankTransactionStatus.LOCKED,
    BankTransactionStatus.COMPLETE
  ))
  public status: string

  @Column(DataType.INTEGER)
  public amount: number

  @ForeignKey(() => BankAccount)
  @Column(DataType.UUIDV4)
  public fromBankAccountId: string

  @ForeignKey(() => BankAccount)
  @Column(DataType.UUIDV4)
  public toBankAccountId: string

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

  @BelongsTo(() => BankAccount, `fromBankAccountId`)
  public fromBankAccount: BankAccount

  @BelongsTo(() => BankAccount, `toBankAccountId`)
  public toBankAccount: BankAccount

}