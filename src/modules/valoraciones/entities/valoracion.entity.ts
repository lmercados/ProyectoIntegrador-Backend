import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_valoraciones')
export class Valoracion extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_valoracion: number;
  @Column({ type: 'varchar', nullable: false })
  valoracion: string;
}
