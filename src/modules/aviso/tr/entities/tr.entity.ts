import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('transformador')
export class Transformador extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  transformadorId: number;
  @Column({ type: 'varchar', length: 100, unique: true })
  aviso: string;
  @Column({ type: 'varchar', length: 100, unique: true })
  obra: string;
  @Column({ type: 'varchar', length: 100})
  ct: string;
  @Column({ type: 'varchar', length: 100, unique: true })
  calle: string;
  @Column({ type: 'varchar'})
  observacion: string;
  @Column({ type: 'varchar'})
  etiqueta: string;
  
  @CreateDateColumn({ type: 'timestamp', name: 'create_at' })
  createtAt: Date;
  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updateAt: Date;
}
