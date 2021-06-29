import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_razones_rechazo')
export class RazonesRechazo extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_razon: number;
  @PrimaryColumn({ type: 'int', nullable: false })
  id_resultado: number;
  @Column({ type: 'varchar', nullable: false })
  razones: string;
}
