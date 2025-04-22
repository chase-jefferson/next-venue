<<<<<<< HEAD
import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';
import bcrypt from 'bcrypt';
=======
import { DataTypes, type Sequelize, Model, type Optional } from "sequelize";
import bcrypt from "bcrypt";
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
}
<<<<<<< HEAD

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
=======
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800

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
<<<<<<< HEAD
  public async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
=======
  public async setPassword(password: string): Promise<string> {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
    return this.password;
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
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
<<<<<<< HEAD
=======
        unique: true,  // Ensures usernames are unique
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
<<<<<<< HEAD
=======
        unique: true,  // Ensures emails are unique
        validate: {
          isEmail: true, // Ensures a valid email format
        },
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
<<<<<<< HEAD
      },
    },
    {
      tableName: 'users',
=======
      }
    },
    {
      tableName: "users",
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
      sequelize,
      hooks: {
        beforeCreate: async (user: User) => {
          await user.setPassword(user.password);
        },
        beforeUpdate: async (user: User) => {
<<<<<<< HEAD
          await user.setPassword(user.password);
=======
          if (user.changed("password") && user.password) {
            await user.setPassword(user.password);
          }
>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
        },
      },
    }
  );

  return User;
}
<<<<<<< HEAD
=======


>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
