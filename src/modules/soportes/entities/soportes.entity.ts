import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_soportes')
export class Soporte extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_soporte: number;
  @Column({ type: 'varchar' })
  soporte: string;
}
