import { Sequelize, Model, DataTypes } from 'sequelize'

const sequelize = new Sequelize('mern-ts-app', 'mern-ts-app', '1234', {
  host: 'localhost',
  dialect: 'mariadb'
})

export class User extends Model {
  public id!: number
  public username!: string
  public password!: string
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false
  }
}, {
  tableName: 'users',
  sequelize: sequelize
})

User.sync()

export default class Users {
  public static async create (username: string, password: string): Promise<User> {
    return User.create({ username, password })
  }
  public static async getUsers (): Promise<User[]> {
    return User.findAll()
  }
}
