import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Default } from 'sequelize-typescript'
import { User, UserRole } from '../models'
import * as uuid from 'uuid/v4'

@Table({
  tableName: 'userUserRole',
  modelName: 'UserUserRole'
})
export class UserUserRole extends Model<UserUserRole> {

  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @ForeignKey(() => User)
  @Column(DataType.UUIDV4)
  public userId: string

  @ForeignKey(() => UserRole)
  @Column(DataType.UUIDV4)
  public userRoleId: string

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

}