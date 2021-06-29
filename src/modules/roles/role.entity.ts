import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  Timestamp,
  ManyToMany,
  JoinColumn,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../user/user.entity';
@Entity('roles')
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', length: 20, nullable: false })
  name: string;
  @Column({ type: 'text', nullable: false })
  description: string;
  @ManyToMany((type) => User, (user) => user.Roles)
  @JoinTable({ name: 'user_roles' })
  users: User[];
  @Column({ type: 'varchar', default: 'ACTIVE', nullable: false, length: 8 })
  status: string;
  @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
  createtAt: Date;
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updateAt: Date;
}

//
