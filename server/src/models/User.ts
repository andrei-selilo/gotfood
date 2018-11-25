import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Default, AfterFind, BelongsToMany } from 'sequelize-typescript'
import { UserRole, UserUserRole, Region, UserRegion, BankAccount } from '../models'
import * as uuid from 'uuid/v4'

export enum UserStatus {
  CONFIRMATION_SENT = 'confirmation_sent',
  CONFIRMED = 'confirmed'
}
@Table({
  tableName: 'users',
  modelName: 'User'
})
export class User extends Model<User> {

  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @Column(DataType.STRING(64))
  public name: string

  @Column(DataType.STRING(64))
  public lastName: string

  @Unique
  @IsEmail
  @Column(DataType.STRING(64))
  public email: string

  @Unique
  @Column(DataType.STRING(30))
  public phone: string

  @Column(DataType.DATE)
  public birthday: Date

  @Column(DataType.STRING(60))
  public password: string

  @Column(DataType.ENUM(
    UserStatus.CONFIRMATION_SENT,
    UserStatus.CONFIRMED
  ))
  public status: string

  @Column(DataType.JSONB)
  public info: {
    phones?: string[],
    addresses?: string[],
  }

  @Column(DataType.JSONB)
  public privateInfo: {
    regionIds?: string[],
    userRoleIds?: string[],
    bankAccountIds?: string[]
  }

  @Column(DataType.BOOLEAN)
  public active: boolean

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

  @BelongsToMany(() => UserRole, () => UserUserRole)
  public userRoles: UserRole[]

  @BelongsToMany(() => Region, () => UserRegion)
  public regions: Region[]

  @HasMany(() => BankAccount)
  public bankAccounts: BankAccount[]

  // @AfterFind
  // public static afterFindHandler(instance: User | User[]) {
  //   const users: User[] = Array.isArray(instance) ? instance : [instance]

  //   let regionIds: Set<number>
  //   let userRoleIds: Set<number> 
  //   let bankAccountIds: Set<number>  

  //   users.forEach((row) => {
  //     row.privateInfo
  //   })


  // }

}