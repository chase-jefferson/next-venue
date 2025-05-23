import { DataTypes, type Sequelize, Model, type Optional } from 'sequelize';

interface RSVPAttributes {
    id?: number;
    eventId: number;
    userId: number;
<<<<<<< HEAD
    status: 'Yes' | 'Maybe' | 'No';

}

=======
    status: 'Yes' | 'Maybe' | 'No' | 'going' | 'interested';

}



>>>>>>> cbdd721bbdf0a525c4fb162977e91a26df614800
interface RSVPCreationAttributes extends Optional<RSVPAttributes, 'id'> {}

export class RSVP
    extends Model<RSVPAttributes, RSVPCreationAttributes>
    implements RSVPAttributes
{
    public id!: number;
    public eventId!: number;
    public userId!: number;
    public status!: 'Yes' | 'Maybe' | 'No';

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export function RSVPFactory(sequelize: Sequelize): typeof RSVP {
    RSVP.init(
        {
            id: {
                type: DataTypes.INTEGER,
                defaultValue: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'users', key: 'id' },
                onDelete: 'CASCADE',
              },
              eventId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: { model: 'events', key: 'id' },
                onDelete: 'CASCADE',
              },
              status: {
                type: DataTypes.ENUM('Yes', 'No', 'Maybe'),
                allowNull: false,
              },
        },
        {
            tableName: 'rsvps',
            sequelize,
        }
    );
    return RSVP;
}