import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface EventAttributes {
  id: number;
  eventName: string;
  description: string;
  date: Date;
  time: string;
  createdBy: string;
}

interface EventCreationAttributes extends Optional<EventAttributes, 'id'> {}

export class Event
  extends Model<EventAttributes, EventCreationAttributes>
  implements EventAttributes
{
  public id!: number;
  public eventName!: string;
  public description!: string;
  public date!: Date;
  public time!: string;
  public createdBy!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function EventFactory(sequelize: Sequelize): typeof Event {
  Event.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      eventName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: DataTypes.TIME
      },
      createdBy: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'users', key: 'id' }, // foreign key to user
        onDelete: 'CASCADE'
        },
    },
    {
      tableName: 'events',
      sequelize,
    }
  );

  return Event;
}
