import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";
import bcrypt from "bcrypt";

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

export class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Hash the password before saving the user
  public async setPassword(password: string): Promise<string> {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
    return this.password;
  }
}

export function UserFactory(sequelize: Sequelize): typeof User {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // Ensures usernames are unique
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // Ensures emails are unique
        validate: {
          isEmail: true, // Ensures a valid email format
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      tableName: "users",
      sequelize,
      hooks: {
        beforeCreate: async (user: User) => {
          await user.setPassword(user.password);
        },
        beforeUpdate: async (user: User) => {
          if (user.changed("password") && user.password) {
            await user.setPassword(user.password);
          }
        },
      },
    }
  );

  return User;
}


