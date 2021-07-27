import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transformadores_razones_rechazo')
export class RazonesRechazo extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id_razon: number;
  @Column({ type: 'varchar', nullable: false })
  razones: string;
}
