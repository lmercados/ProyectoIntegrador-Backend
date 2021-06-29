import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_regulaciones')
export class Regulacion extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_regulacion: number;
  @Column({ type: 'varchar', nullable: false })
  regulacion: string;
}
