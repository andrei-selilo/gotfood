import { Sequelize, Model } from 'sequelize-typescript'
import * as modelList from '../models'

/**
 * Deals with the database
 */
export class DB {
  private _databaseURL: string
  private _instance: Sequelize
  private static _instance: DB

  public static get Instance(): DB {
    if (!this._instance) {
      this._instance = new DB()
    }

    return this._instance
  }

  /**
   * @constructor
   */
  protected constructor() {
    this.setDatabaseURL(process.env.DATABASE_URL)
    this._instance = new Sequelize({ url: this._databaseURL })
    this._instance.addModels(
      Object.keys(modelList).map(key => modelList[key])
    )
  }

  /**
   * An explicit database URL for the database.
   * @readonly
   * @return {object} stage variables.
   */
  get databaseURL() {
    return this._databaseURL
  }

  /**
   * Sets database connection URL
   *
   * @param {string} databaseURL Database URL to set
   * @throws {error} error
   */
  private setDatabaseURL(databaseURL: string): void {
    if (!databaseURL) {
      throw new Error('databaseURL is not provided')
    }
    this._databaseURL = databaseURL.toString()
  }

  /**
   * Instantiates and caches a database instance.
   * @readonly
   * @return {object} initialized database object connected to the target database.
   */
  get instance() {
    return this._instance
  }

  /**
   * Authenticate method
   * @returns {*}
   */
  public async authenticate(): Promise<void> {
    await this.instance.authenticate()
  }

  /**
   * Closes connection with database
   *
   * @returns {Promise}
   */
  public async close(): Promise<void> {
    await this.instance.close()
  }
}
