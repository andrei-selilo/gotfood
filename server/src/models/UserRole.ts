import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, BelongsTo, Default, BelongsToMany } from 'sequelize-typescript'
import { User } from '../models'
import * as uuid from 'uuid/v4'

@Table({
  tableName: 'userRoles',
  modelName: 'UserRole'
})
export class UserRole extends Model<UserRole> {

  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @Unique
  @Column(DataType.STRING(64))
  public name: string

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

  @BelongsToMany(() => User, UserUserRole)
  public users: User[]

}