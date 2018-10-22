import { Table, Column, Model, IsUUID, PrimaryKey, Unique, IsEmail, HasMany, DataType, CreatedAt, UpdatedAt, ForeignKey, BelongsTo, Default, Is } from 'sequelize-typescript'
import { User } from '../models'
import * as uuid from 'uuid/v4'

export enum OptionType {
  NUMBER = 'number',
  STRING = 'string',
  ARRAY = 'array',
  SET = 'set',
  EXPRESSION = 'expression',
  BOOLEAN = 'boolean'
}

@Table({
  tableName: 'options',
  modelName: 'Options'
})
export class Options extends Model<Options> {
  @IsUUID(4)
  @Default(uuid())
  @PrimaryKey
  @Column
  public id: string

  @Column(DataType.STRING(150))
  public name: string

  @Column(DataType.STRING(500))
  public description: string

  @Column(DataType.STRING)
  public value: string

  @Is('OptionTypeValidator', (type: OptionType): never | void => {
    const exist: boolean = Object.keys(OptionType)
      .some((key: string) => OptionType[key] === type)
    if (!exist) {
      throw new Error('You are trying to set a wrong type.')
    }
  })
  @Column({
    type: DataType.ENUM(
      OptionType.NUMBER,
      OptionType.STRING,
      OptionType.ARRAY,
      OptionType.SET,
      OptionType.EXPRESSION,
      OptionType.BOOLEAN
    )
  })
  public type: OptionType

  @CreatedAt
  public createdAt: Date

  @UpdatedAt
  public updatedAt: Date

  public toJSON(): any {
    const values: any = this.get()
    values.id = values.id + ''
    return values
  }
}
