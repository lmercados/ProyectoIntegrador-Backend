import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_regulaciones')
export class Regulacion extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  regulacionId: number;
  @Column({ type: 'varchar', unique: false })
  regulacion: string;
}
