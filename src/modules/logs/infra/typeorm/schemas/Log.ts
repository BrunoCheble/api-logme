import {
  Entity,
  Column,
  ObjectIdColumn,
  CreateDateColumn,
  ObjectID,
} from 'typeorm';

@Entity('logs')
class Log {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  application: string;

  @Column()
  type: string;

  @Column()
  description: string;

  @Column()
  details: JSON;

  @Column()
  created_by: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Log;
