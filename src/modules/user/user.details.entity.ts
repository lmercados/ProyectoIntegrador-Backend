import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('user_details')
export class UserDetails extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', nullable: true, length: 50 })
  name: string;
  @Column({ type: 'varchar', nullable: true })
  lastname: string;
  @Column({ type: 'varchar', default: 'ACTIVE', nullable: false, length: 8 })
  status: string;
  @CreateDateColumn({ type: 'timestamp', name: 'create_at', nullable: true })
  createtAt: Date;
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true })
  updateAt: Date;
}