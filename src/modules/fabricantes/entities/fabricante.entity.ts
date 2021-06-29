import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('transformadores_fabricantes')
export class Fabricante extends BaseEntity {
  @PrimaryColumn({ type: 'int', unique: true, nullable: false })
  id_fabricante: number;
  @Column({ type: 'varchar', nullable: false })
  fabricante: string;
}
