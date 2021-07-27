import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_regulaciones')
export class Regulacion extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_regulacion: number;
  @Column({ type: 'varchar', nullable: false })
  regulacion: string;
}
