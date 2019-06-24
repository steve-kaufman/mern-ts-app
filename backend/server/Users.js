"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('mern-ts-app', 'mern-ts-app', '1234', {
    host: 'localhost',
    dialect: 'mariadb'
});
class User extends sequelize_1.Model {
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING(64),
        allowNull: false
    }
}, {
    tableName: 'users',
    sequelize: sequelize
});
User.sync();
class Users {
    static create(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return User.create({ username, password });
        });
    }
    static getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return User.findAll();
        });
    }
}
exports.default = Users;
//# sourceMappingURL=Users.js.map