import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface RSVPAttributes {
  id: number;
  userId: number;
  eventId: number;
  status: 'interested' | 'going' | 'not going';
}

interface RSVPCreationAttributes extends Optional<RSVPAttributes, 'id'> {}

export class RSVP
  extends Model<RSVPAttributes, RSVPCreationAttributes>
  implements RSVPAttributes
{
  public id!: number;
  public userId!: number;
  public eventId!: number;
  public status!: 'interested' | 'going' | 'not going';

  public readonly createdAt!: Date;
}

export function RSVPFactory(sequelize: Sequelize): typeof RSVP {
  RSVP.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'events',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['interested', 'going', 'not going']],
        },
      },
    },
    {
      tableName: 'rsvps', // This corresponds to the name of your table
      sequelize,
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: false,
    }
  );

  return RSVP;
}
