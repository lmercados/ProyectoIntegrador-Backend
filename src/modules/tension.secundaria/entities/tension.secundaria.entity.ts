import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_tension_secundaria')
export class TensionSecundaria extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_tension: number;
  @Column({ type: 'varchar', nullable: false })
  tension: string;
}
