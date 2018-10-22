import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Default } from 'sequelize-typescript'
import { User, Region } from '../models'
import * as uuid from 'uuid/v4'

@Table({
  tableName: 'userRegion',
  modelName: 'UserRegion'
})
export class UserRegion extends Model<UserRegion> {

  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @ForeignKey(() => User)
  @Column(DataType.UUIDV4)
  public userId: string

  @ForeignKey(() => Region)
  @Column(DataType.UUIDV4)
  public regionId: string

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

}