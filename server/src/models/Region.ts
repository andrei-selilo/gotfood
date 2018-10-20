import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, Default } from 'sequelize-typescript'
import * as uuid from 'uuid/v4'

@Table({
  tableName: 'regions',
  modelName: 'Region'
})
export class Region extends Model<Region> {

  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @Column(DataType.STRING(128))
  public country: string

  @Column(DataType.STRING(128))
  public state: string

  @Column(DataType.STRING(32))
  public currency: string

  @Column(DataType.BOOLEAN)
  public active: boolean

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

}