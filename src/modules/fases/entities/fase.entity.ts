import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_fases')
export class Fase extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_fase: number;
  @Column({ type: 'varchar' })
  fase: string;
}
