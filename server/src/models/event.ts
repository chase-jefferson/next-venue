import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface EventAttributes {
  id: number;
  title: string;
  description?: string;
  date: Date;
  time: string;
  location: string;
  organizerId: number;
}

interface EventCreationAttributes extends Optional<EventAttributes, 'id' | 'description'> {}

export class Event
  extends Model<EventAttributes, EventCreationAttributes>
  implements EventAttributes
{
  public id!: number;
  public title!: string;
  public description?: string;
  public date!: Date;
  public time!: string;
  public location!: string;
  public organizerId!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function EventFactory(sequelize: Sequelize): typeof Event {
  Event.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
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
        type: DataTypes.TIME,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      organizerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      tableName: 'events',
      sequelize,
    }
  );

  return Event;
}
